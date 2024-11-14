/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import { useParams } from "react-router-dom";
import { navItems } from "@/components/general/navItems";
import { Button } from "@/components/ui/button";
import { useResponseContext } from "@/context/ResponseContext";

const ResponsePage = () => {
  const { id } = useParams();
  const { formState, loadForm } = useFormContext();
  const { saveResponse } = useResponseContext();
  const { activeView, isDesktop } = useFormContext();

  useEffect(() => {
    if (id) {
      loadForm(id);
    }
  }, [id]);

  const [navIndex, setNavIndex] = useState(1);

  const ActiveComponent = navItems[navIndex]?.component;

  const handleNext = () => {
    setNavIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= navItems.length ? 1 : newIndex;
    });
  };

  const handlePrevious = () => {
    setNavIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? navItems.length - 1 : newIndex;
    });
  };

  const handleSave = async () => {
    const feedback_id = formState.form.id || "";
    const form_creator_id = formState.form.creatorId || "";
    const form_title = formState.form.form_title || "";

    saveResponse(feedback_id, form_title, form_creator_id);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gradient-to-br from-purple-500 to-blue-900 flex flex-col">
        <div className="flex justify-between mb-6">
          <button onClick={handlePrevious} className="mr-2">
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className="ml-auto">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center justify-center flex-grow mb-10">
          {ActiveComponent && (
            <ActiveComponent
              isDesktop={isDesktop}
              {...(formState[activeView as keyof typeof formState] as object)}
            />
          )}
        </div>

        <Button
          size="lg"
          className="w-full bg-black text-white rounded-lg py-2 mt-6"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ResponsePage;
