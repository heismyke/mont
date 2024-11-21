import { useAuth } from "@/context/AuthContext";
import { useFormContext } from "@/context/FormContext";
import { useResponseContext } from "@/context/ResponseContext";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { CopyIcon, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface TestimonialListProps {
  selectedTab: string;
}

const TestimonialList = ({ selectedTab }: TestimonialListProps) => {
  const { toast } = useToast();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { forms } = useFormContext();
  const {
    responses,
    loadResponses,
    loadResponsesByForm,
    loadResponsesByFavorites,
    toggleFavorite,
  } = useResponseContext();
  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    if (selectedTab === "all") {
      loadResponses(user?.id || "").then(() => setIsLoading(false));
    } else if (selectedTab === "favorites") {
      loadResponsesByFavorites(user?.id || "").then(() => setIsLoading(false));
    } else {
      const selectedForm = forms.find((form) => form.name === selectedTab);
      if (selectedForm) {
        loadResponsesByForm(selectedForm.id).then(() => setIsLoading(false));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, user?.id]);

  const handleCopy = (text: string | null) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Address copied to clipboard",
      });
    }
  };

  const handleFavoriteClick = async (responseId: string) => {
    await toggleFavorite(responseId);
  };

  const handleShare = (videoUrl: string | null) => {
    if (!videoUrl) {
      console.error("No video URL provided.");
      return;
    }

    if (videoUrl) {
      const tweetText = encodeURIComponent("What our participants have to say! 📹");
      const tweetUrl = encodeURIComponent(videoUrl);
      window.open(
        `https://x.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`,
        "_blank"
      );
    }
  };

  const handleDownload = async (videoUrl: string | null) => {
    if (!videoUrl) {
      console.error("No video URL provided.");
      return;
    }

    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `video-testimonial-${Date.now()}.mp4`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Success",
        description: "Video downloaded successfully",
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to download video",
      });
    }
  };

  return (
    <div className="mt-4 grid grid-cols-1 gap-6">
      {isLoading ? (
        <div className="flex justify-center items-center h-56">
          <Loader className="w-12 h-12 animate-spin text-gray-400" />
        </div>
      ) : responses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="relative w-48 h-48">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-lg transform rotate-6"></div>
            <div className="absolute inset-0 m-auto w-28 h-28 bg-white rounded-xl shadow-lg flex items-center justify-center"></div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
            No responses yet
          </h3>

          <p className="text-gray-500 text-center text-sm mb-8 max-w-md">
            Create and share form links to start collecting video testimonials.
            The responses will appear here.
          </p>

          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/form")}
              className="flex items-center gap-2"
            >
              Get started
            </Button>
          </div>
        </div>
      ) : (
        responses.map((form) => {
          return (
            <div
              key={form.id}
              className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Video */}
                <div className="w-full md:w-72 flex-shrink-0">
                  <div className="relative rounded-lg overflow-hidden bg-gray-900">
                    <video
                      className="w-full aspect-video object-cover"
                      src={form.responseState.response.videoUrl || ""}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row items-start justify-between mb-3">
                    <div className="flex items-center gap-3 mb-3 md:mb-0">
                      <Avatar className="w-10 h-10 rounded-full">
                        <AvatarImage
                          className="rounded-full"
                          src={form.responseState.customerInputs.photo || ""}
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-gray-800 text-sm flex items-center gap-2">
                          {form.responseState.customerInputs.name || "N/A"}
                        </h3>
                        <p className="text-gray-600 text-xs">
                          {form.responseState.customerInputs.projectName ||
                            "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <button
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-sm transition-colors"
                        onClick={() =>
                          handleShare(form.responseState.response.videoUrl)
                        }
                      >
                        <TwitterLogoIcon className="w-4 h-4" />
                        <span className="">Share</span>
                      </button>
                      <button
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-sm transition-colors"
                        onClick={() =>
                          handleDownload(form.responseState.response.videoUrl)
                        }
                      >
                        <DownloadIcon className="w-4 h-4" />
                        <span className="">Download</span>
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      {form.name || "N/A"}
                    </h4>
                  </div>

                  <div className="mb-2">
                    <p className="text-xs text-gray-500 italic">
                      {form.responseState.customerInputs.comment || "N/A"}
                    </p>

                    <button
                      onClick={() =>
                        setExpandedId(expandedId === form.id ? null : form.id)
                      }
                      className="text-xs text-purple-600 hover:text-purple-800 font-medium"
                    >
                      {expandedId === form.id
                        ? "Show less"
                        : "Show more details"}
                    </button>

                    {expandedId === form.id && (
                      <div className="mt-2 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                        {/* <p className="text-xs text-gray-600">
                          <span className="font-medium">Email: </span>
                          {form.responseState.customerInputs.email || "N/A"}
                        </p> */}
                        <div className="hidden md:block h-4 w-px bg-gray-300" />
                        <div className="flex gap-3 items-center">
                          <p className="text-xs text-gray-600 line-clamp-1">
                            <span className="font-medium">
                              Wallet Address:{" "}
                            </span>
                            {form.responseState.customerInputs.walletAddress ||
                              "N/A"}
                          </p>
                          <CopyIcon
                            size={14}
                            className="text-gray-600 cursor-pointer"
                            onClick={() =>
                              handleCopy(
                                form.responseState.customerInputs
                                  .walletAddress || ""
                              )
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 text-sm text-gray-400">
                    <button onClick={() => handleFavoriteClick(form.id)}>
                      <HeartIcon
                        className={`w-6 h-6 ${
                          form.isFavorite
                            ? "fill-current text-purple-700"
                            : "stroke-current"
                        }`}
                      />
                    </button>

                    <div className="flex items-center gap-2">
                      <span className="text-sm">
                        {new Date(form.date).toLocaleDateString()},
                      </span>
                      <p className="text-sm">
                        {form.responseState.customerInputs.nationality || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

const HeartIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

const DownloadIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default TestimonialList;