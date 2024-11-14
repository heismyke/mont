import { useFormContext } from "@/context/FormContext";
import { Heart, Video } from "lucide-react";

interface WelcomePageProps {
  isDesktop: boolean;
  onNavigateNext: () => void;
}

const WelcomePage = ({ isDesktop, onNavigateNext }: WelcomePageProps) => {
  const { formState } = useFormContext();
  const { welcome, design } = formState;

  return (
    <div className="relative">
      <div className="absolute top-[-12px] right-4 z-10">
        <button
          className="bg-white text-xs hover:text-white flex items-center px-3 py-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow"
          style={{
            color: design.primaryColor,
            ["--tw-hover-bg" as string]: design.primaryColor,
          }}
        >
          Collect testimonials with Mont ↗
        </button>
      </div>

      <div
        className={`bg-white rounded-2xl p-6 shadow-lg mx-auto relative ${
          isDesktop
            ? "max-w-2xl"
            : "w-[360px] h-[660px] border-4 border-gray-800 flex flex-col justify-center"
        }`}
        style={{ backgroundColor: design.backgroundColor }}
      >
        <div className="flex justify-between items-start mb-4">
          {design.logo.preview ? (
            <img
              src={design.logo.preview}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          ) : (
            <Heart
              className="fill-current"
              size={48}
              style={{ color: design.primaryColor }}
            />
          )}
        </div>

        <h2 className="text-2xl font-bold mb-3">{welcome.title}</h2>
        <p className="text-gray-600 mb-4">{welcome.subtitle}</p>

        <ul className="text-base list-disc text-gray-600 ml-4 mb-3">
          {welcome.prompts.split("\n").map((prompt, index) => (
            <li key={index}>{prompt.replace("- ", "")}</li>
          ))}
        </ul>

        <button
          className="w-full text-white rounded-lg py-3 mb-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: design.primaryColor }}
          onClick={onNavigateNext}
        >
          <Video size={20} />
          {welcome.buttonText}
        </button>

        {/* {!welcome.showTestimonialButton && (
          <button className="w-full bg-gray-100 text-gray-700 rounded-lg py-3 flex items-center justify-center gap-2">
            <Pen size={20} />
            Write a testimonial
          </button>
        )} */}

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

export default WelcomePage;
