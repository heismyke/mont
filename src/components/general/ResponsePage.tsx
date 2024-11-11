import React from "react";
import { Heart, Star, Video, Upload } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface ResponsePageProps {
  isDesktop: boolean;
}

const ResponsePage: React.FC<ResponsePageProps> = ({ isDesktop }) => {
  return (
    <div className="relative">
      <div className="absolute top-[-12px] right-4 z-10">
        <button className="bg-white text-xs text-purple-600 hover:text-white hover:bg-purple-700 flex items-center px-3 py-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow">
          Collect testimonials with Mont ↗
        </button>
      </div>

      <div
        className={`bg-white rounded-2xl p-6 shadow-lg mx-auto ${
          isDesktop
            ? "w-[540px]"
            : "w-[360px] h-[660px] border-4 border-gray-800 overflow-y-auto"
        }`}
      >
        <div className=" mx-auto space-y-4">
          <div className="flex justify-between items-start mb-4">
            <Heart className="text-purple-700 fill-purple-700" size={48} />
          </div>

          <div>
            <p className="text-gray-800 font-medium text-xl mb-3">
              Record a video feedback{" "}
            </p>

            <ul className="text-sm list-disc text-gray-600 ml-4 mb-3">
              <li>What do you like about Mont?</li>
              <li>Would you recommend Mont to a friend?</li>
            </ul>
          </div>

          <div>
            <label className="block text-sm text">Rate your experience</label>
            <div className="flex gap-2 mt-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button key={rating} className="hover:text-yellow-500">
                  <Star size={24} />
                </button>
              ))}
            </div>
          </div>

          {/* Video record UI section */}
          <div className="bg-black rounded-2xl">
            <div
              style={{
                backgroundImage: `url('https://utfs.io/f/PKy8oE1GN2J3XLp6Sd83fo9U5AvPYm0IDul7exrc1OS2MyBZ')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="aspect-video flex flex-col items-center justify-center rounded-lg relative "
            >
              <div>
                <p className="text-gray-50 text-center text-sm">Preview</p>
                <p className="text-gray-300 text-center text-xs px-4">
                  Your responder's camera feed will show up here.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex items-center justify-between w-full p-4 ">
                <span className="text-xl text-gray-300 font-medium">00:00</span>

                <button className="bg-red-700 hover:bg-red-700 text-white rounded-full p-3">
                  <Video size={30} />
                </button>

                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2">
                  <Upload size={12} />
                </button>
              </div>
            </div>
          </div>

          <Separator />

          <Button size={"lg"} className="bg-secondary w-full text-gray-800 text-sm ">
            <Upload size={20} />
            Upload a file
          </Button>

          <div
            className={` text-center ${
              isDesktop ? "mt-10" : "absolute bottom-6 left-0 right-0"
            }`}
          >
            <p className={`text-xs text-gray-300`}>Powered by Mont protocol</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;
