import { useState, useEffect } from "react";
import { ArrowLeftIcon, ChevronDown, Layout, Menu } from "lucide-react";
import { MobileIcon } from "@radix-ui/react-icons";
import { AdminNavItems } from "../components/general/navItems";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FormTitleDialog } from "@/components/dialogs/FormTitle";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";

const generateUniqueId = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const AdminSetup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formState, loadOnboardingForm, saveOnboardingForm, updateForm } = useFormContext();
  const { background } = formState.design;

  const {
    activeView,
    setActiveView,
    expandedItem,
    setExpandedItem,
    isDesktop,
    setIsDesktop,
  } = useFormContext();
  const { user } = useAuth();

  // State for mobile sheet
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (id) {
      loadOnboardingForm(id);
    } else {
      updateForm({ id: generateUniqueId() });
    }
    updateForm({ creatorId: user?.id || "" });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = async () => {
    await saveOnboardingForm();
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/dashboard");
    setIsSheetOpen(false);
  };

  const ActiveComponent = AdminNavItems.find(
    (item) => item.id === activeView
  )?.component;

  const ActiveSettings = AdminNavItems.find(
    (item) => item.id === expandedItem
  )?.settings;

  const SidebarContent = () => (
    <div className="space-y-3 p-4">
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
        {AdminNavItems.map((item) => (
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
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-96 bg-white border-r border-gray-200">
        <SidebarContent />
      </div>

      {/* Mobile Sheet Navigation */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] text-gray-600 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 p-4 md:p-8 flex flex-col"
        style={{
          backgroundImage:
            background.preview && background.preview.trim() !== ""
              ? `url(${background.preview})`
              : "linear-gradient(to bottom right, #6a0dad, #1e3a8a)",
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

export default AdminSetup;