import { useRef, useEffect, useState } from "react";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormContext } from "@/context/FormContext";

interface SocialHandleProps {
  isDesktop: boolean;
  onNavigateNext: () => void;
}

const SocialHandle = ({ isDesktop }: SocialHandleProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const { formState } = useFormContext();
  const {
    socialHandle,
    design,
    design: { font },
  } = formState;

  const navigate = useNavigate();
  const location = useLocation();

  // Only apply isDesktop layout on /admin-manager route
  const useDesktopLayout = location.pathname === "/admin-manager" && isDesktop;
  const useMobileLayout = location.pathname === "/admin-manager" && !isDesktop;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollInterval = setInterval(() => {
      scrollPosition += 1;
      container.scrollTop = scrollPosition;

      if (scrollPosition >= container.scrollHeight - container.clientHeight) {
        scrollPosition = 0;
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    if (location.pathname === "/admin-manager") {
      setShowWelcome(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Dialog open={showWelcome} onOpenChange={setShowWelcome}>
        <DialogContent className="sm:max-w-sm">
          <DialogDescription className="text-base mt-2 text-center">
            <div className="mt-4 text-sm text-gray-600 text-start">
              <span className="font-medium text-blue-600">Tip 1:</span> Response
              videos are excellent choices for social marketing contents!
              example below
              <br />
              <span className="font-medium text-blue-600">Tip 2:</span> Use the
              'Get Form' button to customize the demo to your needs! ✨
            </div>
          </DialogDescription>

          <div className="flex justify-center w-full mt-4">
            <Button
              onClick={() => setShowWelcome(false)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-400/50"
            >
              Got it ✨
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div
        className={`
        rounded-2xl shadow-lg mx-auto relative
        ${
          useDesktopLayout
            ? "max-w-2xl p-3"
            : useMobileLayout
            ? "w-[360px] h-[660px] p-2 border-4 border-gray-800 flex flex-col justify-center"
            : `
              w-full
              sm:w-[360px]
              md:w-[480px]
              lg:w-[560px]
              min-h-[500px]
              flex flex-col justify-center 
            `
        }
      `}
        style={{ backgroundColor: design.backgroundColor, fontFamily: font }}
      >
        {/* Profile Header */}
        <div className="border-b border-gray-800 py-3 px-4">
          <div className="flex items-center gap-3">
            <img
              src={design.logo.preview || ""}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-sm font-bold">{socialHandle.profile.name}</h1>
              <p className="text-xs text-gray-500">
                @{socialHandle.profile.handle}
              </p>
            </div>
            <div
              className="relative ml-auto"
              onClick={() => navigate("/dashboard")}
            >
              <Button className="relative cursor-pointer overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group">
                <span className="flex items-center gap-2">
                  <Sparkles
                    size={16}
                    className={`transition-transform duration-300`}
                  />
                  Get Form
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <div className="absolute inset-0 bg-blue-50/20 rounded-full animate-ping" />
            </div>
          </div>
          <p className="mt-3 text-sm">{socialHandle.profile.bio}</p>
          <div className="flex gap-4 mt-2 text-xs text-gray-500">
            <span>Following: {socialHandle.profile.following}</span>
            <span>Followers: {socialHandle.profile.followers}</span>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-hidden"
          style={{ height: "calc(100vh - 150px)" }}
        >
          {socialHandle.tweets.map((tweet) => (
            <div key={tweet.id} className="border-b border-gray-800 p-3">
              <div className="flex items-start gap-2">
                <img
                  src={design.logo.preview || ""}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold">
                      {socialHandle.profile.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      @{socialHandle.profile.handle} · {tweet.timestamp}
                    </span>
                    <MoreHorizontal className="ml-auto" size={16} />
                  </div>
                  <p className="mt-1 text-sm">{tweet.content}</p>
                  <video
                    className="mt-2 rounded-lg w-full max-h-48 object-cover"
                    autoPlay
                    muted
                    loop
                  >
                    <source src={tweet.videoUrl} type="video/mp4" />
                  </video>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                      <MessageCircle size={16} />
                      {tweet.replies}
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-400 transition-colors">
                      <Repeat2 size={16} />
                      {tweet.retweets}
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                      <Heart size={16} />
                      {tweet.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                      <Share size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialHandle;
