/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFormContext } from "@/context/FormContext";
import { useParams } from "react-router-dom";
import { navItems } from "@/components/general/navItems";

const ResponsePage = () => {
  const { id } = useParams();
  const { formState, loadForm, activeView, isDesktop } = useFormContext();
  const { background } = formState.design;
  const [navIndex, setNavIndex] = useState(1);

  useEffect(() => {
    if (id) {
      loadForm(id);
    }
  }, [id]);

  const ActiveComponent = navItems[navIndex]?.component;

  const handleNavigateNext = () => {
    setNavIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <div
        className="flex-1 p-4 flex flex-col"
        style={{
          backgroundImage:
            background.preview && background.preview.trim() !== ""
              ? `url(${background.preview})`
              : "linear-gradient(to bottom right, #6a0dad, #1e3a8a)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-center flex-grow">
          {ActiveComponent && (
            <ActiveComponent
              isDesktop={isDesktop}
              onNavigateNext={handleNavigateNext}
              {...(formState[activeView as keyof typeof formState] as object)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;
