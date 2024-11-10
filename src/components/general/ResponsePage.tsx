import React from "react";
import { Star } from "lucide-react";

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
            ? "max-w-2xl"
            : "w-[360px] h-[660px] border-4 border-gray-800"
        }`}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              What was your favorite part of the hackathon?
            </label>
            <textarea className="w-full p-3 border rounded-lg" rows={4} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              What could we improve for next time?
            </label>
            <textarea className="w-full p-3 border rounded-lg" rows={4} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Rate your overall experience
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button key={rating} className="p-2 hover:text-yellow-500">
                  <Star size={24} />
                </button>
              ))}
            </div>
          </div>
        </div>
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

export default ResponsePage;
