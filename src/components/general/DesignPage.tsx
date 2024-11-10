import React from "react";
import { Heart, Video } from "lucide-react";

interface DesignPageProps {
  isDesktop: boolean;
}

const DesignPage: React.FC<DesignPageProps> = ({ isDesktop }) => {
  return (
    <div className="relative">
      <div className="absolute top-[-12px] right-4 z-10">
        <button className="bg-white text-xs text-purple-600 hover:text-white hover:bg-purple-700 flex items-center px-3 py-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow">
          Collect testimonials with Mont ↗
        </button>
      </div>

      <div
        className={`bg-white rounded-2xl p-6 shadow-lg mx-auto relative ${
          isDesktop
            ? "max-w-2xl"
            : "w-[360px] h-[660px] border-4 border-gray-800 flex flex-col justify-center"
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <Heart className="text-purple-700 fill-purple-700" size={48} />
        </div>

        <h2 className="text-2xl font-bold mb-3">Share a testimonial!</h2>
        <p className="text-gray-600 mb-4">
          Do you love using our product? We'd love to hear about it!
        </p>

        <ul className="list-disc text-gray-600 ml-5 mb-6">
          <li>Share your experience with a quick video or text testimonial</li>
          <li>Recording a video? Don't forget to smile 😊</li>
        </ul>

        <button className="w-full bg-purple-700 text-white rounded-lg py-3 mb-3 flex items-center justify-center gap-2">
          <Video size={20} />
          Record a video
        </button>

        {/* <button className="w-full bg-gray-100 text-gray-700 rounded-lg py-3 flex items-center justify-center gap-2">
          <Pen size={20} />
          Write a testimonial
        </button> */}

        <div
          className={` text-center ${
            isDesktop ? "mt-10" : "absolute bottom-6 left-0 right-0"
          }`}
        >
          <p className={`text-xs text-gray-300`}>Powered by Mont protocol</p>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
