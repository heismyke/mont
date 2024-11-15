import React from "react";
import { Heart, Video } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import { useLocation } from "react-router-dom";

interface DesignPageProps {
  isDesktop: boolean;
}

const DesignPage: React.FC<DesignPageProps> = ({ isDesktop }) => {
  const { formState } = useFormContext();
  const { primaryColor, backgroundColor, font, logo } = formState.design;

  const location = useLocation();

  // Only apply isDesktop layout on /form route
  const useDesktopLayout = location.pathname === "/form" && isDesktop;
  const useMobileLayout = location.pathname === "/form" && !isDesktop;

  return (
    <div className="relative">
      <div className="absolute top-[-12px] right-4 z-10">
        <button 
          className="bg-white text-xs hover:text-white flex items-center px-3 py-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow"
          style={{ 
            color: primaryColor,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
          Collect testimonials with Mont ↗
        </button>
      </div>

      <div
        className={`
          rounded-2xl p-4 shadow-lg mx-auto relative
          ${
            useDesktopLayout
              ? "max-w-2xl"
              : useMobileLayout
              ? "w-[360px] h-[660px] border-4 border-gray-800 flex flex-col justify-center"
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
        style={{ 
          backgroundColor: backgroundColor,
          fontFamily: font 
        }}
      >
        <div className="flex justify-between items-start mb-4">
          {logo.preview ? (
            <img src={logo.preview} alt="Logo" className="h-12 w-12 object-contain" />
          ) : (
            <Heart 
              className="fill-current" 
              size={48} 
              style={{ color: primaryColor }}
            />
          )}
        </div>

        <h2 className="text-2xl font-bold mb-3">Share a testimonial!</h2>
        <p className="text-gray-600 mb-4">
          Do you love using our product? We'd love to hear about it!
        </p>

        <ul className="list-disc text-gray-600 ml-5 mb-6">
          <li>Share your experience with a quick video or text testimonial</li>
          <li>Recording a video? Don't forget to smile 😊</li>
        </ul>

        <button 
          className="w-full text-white rounded-lg py-3 mb-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: primaryColor }}
        >
          <Video size={20} />
          Record a video
        </button>

        <div
          className={`text-center ${
            isDesktop ? "mt-10" : "absolute bottom-6 left-0 right-0"
          }`}
        >
          <p className="text-xs text-gray-300">Powered by Mont protocol</p>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;