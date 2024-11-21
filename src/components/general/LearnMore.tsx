import { Globe } from "lucide-react";
import { Button } from "../ui/button";

interface LearnMoreProps {
  isDesktop: boolean;
  onNavigateNext: () => void;
}

const LearnMore = ({ onNavigateNext }: LearnMoreProps) => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10 bg-white rounded-lg shadow-md space-y-8">
      <div className="">
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src="/assets/images/mont.png" className="w-8 sm:w-10 h-8 sm:h-10" />
          <h1 className="text-xl md:text-2xl text-center font-bold">Mont</h1>
        </div>

        <p className="text-sm text-gray-600 text-center">
          Mont transforms hackathon and event feedback into powerful social
          proof for Web3 protocols. Share link. Collect video feedback. Get
          ready-to-post social contents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2">
        <div className="bg-gray-50 p-2 rounded text-center space-y-2">
          <img src="/assets/images/video.svg" className="w-12 h-12 mx-auto" />
          <h3 className="text-base font-semibold">Video Collection</h3>
          <p className="text-sm text-gray-600">
            Easily gather video feedbacks from hackathon participants and
            conference attendees.
          </p>
        </div>
        <div className="bg-gray-50 p-2 rounded text-center space-y-2">
          <img src="/assets/images/content.svg" className="w-12 h-12 mx-auto" />
          <h3 className="text-base font-semibold">Content Creation</h3>
          <p className="text-sm text-gray-600">
            Our team professionally edits your collected videos into engaging
            contents.
          </p>
        </div>

        <div className="bg-gray-50 p-2 rounded text-center space-y-2">
          <Globe className="mx-auto mb-1 text-purple-900" size={38} />
          <h3 className="text-base font-semibold">Share and Grow</h3>
          <p className="text-sm text-gray-600">
            Share contents across your social channels to build credibility and
            attract new users to your protocol.
          </p>
        </div>
      </div>

      <div className="flex gap-8 justify-center items-center mr-20">
        <div className="transform translate-x-1/2">
          <img
            src="/assets/images/hand.svg"
            className="w-14 h-10 animate-bounce-horizontal"
          />
        </div>
        <Button onClick={onNavigateNext} className="bg-purple-700 text-white text-sm px-4 py-2 rounded hover:bg-purple-800">
          Go to Live Demo
        </Button>
      </div>
    </div>
  );
};

export default LearnMore;
