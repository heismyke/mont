import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { CopyIcon } from "lucide-react";

const TestimonialList = () => {
 const {toast} = useToast();

  const testimonials = [
    {
      id: 1,
      name: "Mariah Carey",
      title: "Team Banana Bets",
      avatar: "/avatar1.jpg",
      videoUrl: "/testimonials/mariah-video.mp4",
      date: "12-04-2024",
      tags: ["feedback", "build-in-public"],
      country: "en",
      fileSize: "24MB",
      address: "0x1234567890abcdef00209282",
    },
    {
      id: 2,
      name: "Rick Astley",
      title: "Team Gas Guard",
      avatar: "/avatar2.jpg",
      videoUrl: "/testimonials/rick-video.mp4",
      date: "12-04-2024",
      tags: ["social", "build-in-public"],
      country: "ar",
      fileSize: "18MB",
      address: "0x1234567890abcdef7477hddd",
    },
    {
      id: 3,
      name: "Lily Hughes",
      title: "Team Buildspace",
      avatar: "/avatar3.jpg",
      videoUrl: "/testimonials/lily-video.mp4",
      date: "12-04-2024",
      tags: ["feedback", "social"],
      country: "br",
      fileSize: "21MB",
      address: "0x1234567890abcdefw635639",
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Address copied to clipboard",
    });
  };

  return (
    <div className="mt-4 grid grid-cols-1 gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex gap-6">
            {/* Left side - Video */}
            <div className="w-72 flex-shrink-0">
              <div className="relative rounded-lg overflow-hidden bg-gray-900">
                <video
                  className="w-full aspect-video object-cover"
                  src={testimonial.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-4">
                {" "}
                {/* Increased margin bottom */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 rounded-full">
                    <AvatarImage
                      className="rounded-full"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm flex items-center gap-2">
                      {" "}
                      {/* Reduced font size */}
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-xs">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="flex items-center gap-2 px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-sm transition-colors"
                    onClick={() =>
                      console.log(`Sharing ${testimonial.videoUrl}`)
                    }
                  >
                    <TwitterLogoIcon className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button
                    className="flex items-center gap-2 px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-sm transition-colors"
                    onClick={() =>
                      console.log(`Downloading ${testimonial.videoUrl}`)
                    }
                  >
                    <DownloadIcon className="w-4 h-4" />
                    <span>{testimonial.fileSize}</span>
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Near Redacted 2024
                </h4>
              </div>

              {/* <div className="flex flex-wrap gap-2 mb-4">
                {testimonial.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div> */}

              {/* Witty comment */}
              <p className="text-xs text-gray-500 italic mb-3 line-clamp-1">
                {testimonial.name === "Rick Astley" &&
                  "This hackathon was amazing! Never gonna give up building!"}
                {testimonial.name === "Mariah Carey" &&
                  "The energy at ETH Global was through the roof! All I want for Christmas is Web3!"}
                {testimonial.name === "Lily Hughes" &&
                  "Buildspace helped me take my project from 0 to 1 in just 6 weeks!"}
              </p>

              <div className="flex gap-3 items-center mb-2">
                <p className="text-xs text-gray-600 font-medium line-clamp-1">
                  Wallet Address: {testimonial.address}
                </p>

                <CopyIcon size={14} className="text-gray-600 cursor-pointer" onClick={() => handleCopy(testimonial.address)} />
              </div>

              {/* Footer */}
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <HeartIcon className="w-5 h-5 text-purple-700" />
                <span className="text-sm">{testimonial.date}</span>
                <img
                  src={`/src/assets/flags/${testimonial.country}.svg`}
                  alt=""
                  className="w-4 h-4 rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
      ))}
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
