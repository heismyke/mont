/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFormContext } from "@/context/FormContext";
import { useParams } from "react-router-dom";
import { navItems } from "@/components/general/navItems";

const ResponsePage = () => {
  const { id } = useParams();
  const { formState, loadForm, activeView, isDesktop } = useFormContext();
  const [navIndex, setNavIndex] = useState(1);

  useEffect(() => {
    if (id) {
      loadForm(id);
    }
  }, [id]);

  const ActiveComponent = navItems[navIndex]?.component;

  const handleNavigateNext = () => {
    setNavIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <div className="flex-1 p-8 bg-gradient-to-br from-purple-500 to-blue-900 flex flex-col">
        <div className="flex items-center justify-center flex-grow mb-10">
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
