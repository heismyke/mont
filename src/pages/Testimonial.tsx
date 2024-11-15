/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  ArrowLeftIcon,
  ChevronDown,
  CopyIcon,
  EditIcon,
  Layout,
} from "lucide-react";
import { MobileIcon } from "@radix-ui/react-icons";
import { navItems } from "../components/general/navItems";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

// Utility function to generate a unique ID
const generateUniqueId = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const TestimonialForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formState, loadForm, saveForm, updateForm } = useFormContext();
  const { background } = formState.design;
  const { toast } = useToast();
  const {
    activeView,
    setActiveView,
    expandedItem,
    setExpandedItem,
    isDesktop,
    setIsDesktop,
  } = useFormContext();
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      loadForm(id);
    }
    updateForm({ id: generateUniqueId() });
    updateForm({ creatorId: user?.id || "" });
  }, []);

  const handleSave = async () => {
    await saveForm();
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const ActiveComponent = navItems.find(
    (item) => item.id === activeView
  )?.component;

  const ActiveSettings = navItems.find(
    (item) => item.id === expandedItem
  )?.settings;

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Left Sidebar */}
      <div className="w-96 bg-white border-r border-gray-200 p-4">
        <div
          onClick={handleBack}
          className="flex items-center mb-6 text-gray-500 cursor-pointer"
        >
          <button className="mr-2">
            <ArrowLeftIcon size={14} />
          </button>
          <h1 className="text-sm">Dashboard</h1>
        </div>

        <div className="flex items-center mb-3 justify-between">
          <p className="font-medium ml-3">{formState.form.form_title || ""}</p>

          <FormTitleDialog />
        </div>

        <div className="space-y-2">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-gray-100">
              <button
                onClick={() => {
                  setExpandedItem(expandedItem === item.id ? null : item.id);
                  setActiveView(item.id);
                }}
                className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg text-sm"
              >
                <span className="mr-3">{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    expandedItem === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedItem === item.id && ActiveSettings && (
                <div className="p-4 bg-gray-50">
                  <ActiveSettings />
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="w-full bg-black text-white rounded-lg py-2 mt-6"
          onClick={handleSave}
        >
          Save Changes
        </Button>

        {id && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={`${window.location.origin}/form/${id}`}
                className="flex-1 text-sm p-2 border rounded bg-white text-gray-800"
              />
              <Button
                variant="outline"
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    `${window.location.origin}/form/${id}`
                  );
                  toast({
                    title: "Copied",
                    description: "Form URL copied to clipboard",
                  });
                }}
              >
                <CopyIcon />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className="flex-1 p-8 flex flex-col"
        style={{
          backgroundImage: (background.preview && background.preview.trim() !== '') 
          ? `url(${background.preview})` 
          : 'linear-gradient(to bottom right, #6a0dad, #1e3a8a)',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-end mb-6">
          <div className="bg-white rounded-lg p-[5px] flex gap-1">
            <button
              onClick={() => setIsDesktop(true)}
              className={`p-[4px] rounded-md ${isDesktop ? "bg-gray-200" : ""}`}
            >
              <Layout size={20} />
            </button>
            <button
              onClick={() => setIsDesktop(false)}
              className={`p-[4px] rounded-md ${
                !isDesktop ? "bg-gray-200" : ""
              }`}
            >
              <MobileIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow mb-10">
          {ActiveComponent && (
            <ActiveComponent
              onNavigateNext={function (): void {
                throw new Error("Function not implemented.");
              }}
              isDesktop={isDesktop}
              {...(formState[activeView as keyof typeof formState] as object)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialForm;

export const FormTitleDialog = () => {
  const { formState, updateForm } = useFormContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <EditIcon size={20} className="text-gray-500 hover:text-gray-700" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-gray-700">
          <DialogTitle>Form Title</DialogTitle>
          <DialogDescription className="mt-1 text-sm">
            Name your form to help you identify it.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Input
              type="text"
              value={formState.form.form_title || ""}
              onChange={(e) => updateForm({ form_title: e.target.value })}
              className="w-full px-3 py-1 text-gray-700 text-base border rounded-md "
              placeholder="Enter form title..."
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button size={"lg"} className="w-full">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
