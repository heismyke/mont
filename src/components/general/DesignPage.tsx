import React from "react";
import { Heart, Video } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import { useLocation, useNavigate } from "react-router-dom";

interface DesignPageProps {
  isDesktop: boolean;
}

const DesignPage: React.FC<DesignPageProps> = ({ isDesktop }) => {
  const { formState } = useFormContext();
  const {welcome, design} = formState
  const { primaryColor, backgroundColor, font, logo } = formState.design;
  const navigate = useNavigate();
  const location = useLocation();

  // Only apply isDesktop layout on /form route
  const useDesktopLayout = location.pathname === "/form" && isDesktop;
  const useMobileLayout = location.pathname === "/form" && !isDesktop;

  return (
    <div className="relative">
     { formState.form.form_ad && <div className="absolute top-[-12px] right-4 z-10">
        <button
          className="bg-white text-xs hover:text-white flex items-center px-3 py-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow"
          style={{
            color: primaryColor,
            ["--tw-hover-bg" as string]: primaryColor,
          }}
          onClick={() => navigate('/')}
        >
          Collect testimonials with Mont
        </button>
      </div>}

      <div
        className={`
          rounded-2xl p-5 shadow-lg mx-auto relative
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
          fontFamily: font,
        }}
      >
        <div className="flex justify-between items-start mb-4">
          {logo.preview ? (
            <img
              src={logo.preview}
              alt="Logo"
              className="h-12 w-12 object-contain rounded-sm"
            />
          ) : (
            <Heart
              className="fill-current"
              size={48}
              style={{ color: primaryColor }}
            />
          )}
        </div>

        <h2 className="text-2xl font-bold mb-3">{welcome.title}</h2>
        <p className="text-gray-600 mb-4">
        {welcome.subtitle}
        </p>

        <ul className="text-sm sm:text-base list-disc text-gray-600 ml-4 mb-3">
          {welcome.prompts.split("\n").map((prompt, index) => (
            <li key={index}>{prompt.replace("- ", "")}</li>
          ))}
        </ul>

        <button
          className="w-full text-white rounded-lg py-2 sm:py-3 mb-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: design.primaryColor }}
          
        >
          <Video size={20} />
          {welcome.buttonText}
        </button>

        <div
          className={`text-center ${
            useDesktopLayout ? "mt-10" : "absolute bottom-6 left-0 right-0"
          }`}
        >
          <p className="text-xs text-gray-300">Powered by Mont protocol</p>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
