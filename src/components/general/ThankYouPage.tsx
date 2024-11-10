import React from "react";

interface ThankYouPageProps {
  isDesktop: boolean;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ isDesktop }) => {
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
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block p-3 bg-green-100 text-green-500 rounded-full">
              ✓
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-4">
            Thank You for Your Feedback!
          </h1>

          <p className="text-gray-600 mb-8">
            Your response has been recorded. We appreciate your participation in
            making our hackathon better!
          </p>
        </div>

        <div className={` text-center ${isDesktop ? 'mt-10' : 'absolute bottom-6 left-0 right-0'}`}>
          <p className={`text-xs text-gray-300`}>Powered by Mont protocol</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
