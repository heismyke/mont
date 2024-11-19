/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ChevronDown, Layout } from "lucide-react";
import { MobileIcon } from "@radix-ui/react-icons";
import { AdminNavItems } from "../components/general/navItems";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FormTitleDialog } from "@/components/dialogs/FormTitle";
import PaymentPromptDialog from "@/components/dialogs/Paywall";
// import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
// import {
//   TooltipProvider,
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "@/components/ui/tooltip";
// import Switch from "@/components/ui/Switch";

// Utility function to generate a unique ID
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
  const { formState, loadForm, saveForm, updateForm } = useFormContext();
  const { background } = formState.design;
  // const { updateFormState } = useFormContext();

  // const { toast } = useToast();
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

  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const handleSave = async () => {
    await saveForm();
    setShowPaymentDialog(true);
  };

  const handleClosePaymentDialog = () => {
    setShowPaymentDialog(false);
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const ActiveComponent = AdminNavItems.find(
    (item) => item.id === activeView
  )?.component;

  const ActiveSettings = AdminNavItems.find(
    (item) => item.id === expandedItem
  )?.settings;

  // const disableMontBanner = () => {
  //   navigate("/subscription");
  //   // updateFormState("form", { form_ad: false });
  // };

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

        {/* <div className="flex items-center justify-between mt-5 px-3">
          <div className="flex items-center space-x-2">
            <label className="block text-sm text-gray-600">
              Disable banner
            </label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <QuestionMarkCircledIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Disable mont banner at top of form</p>
                  <p> only available on paid plans</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Switch
            checked={formState.form.form_ad === true}
            onCheckedChange={disableMontBanner}
          />
        </div> */}

        <PaymentPromptDialog
          isOpen={showPaymentDialog}
          onClose={handleClosePaymentDialog}
          form_link={`${window.location.origin}/${id}`}
        />

        <Button
          size="lg"
          className="w-full bg-black text-white rounded-lg py-2 mt-6"
          onClick={handleSave}
        >
          Save Changes
        </Button>

        {/* {id && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={`${window.location.origin}/${id}`}
                className="flex-1 text-sm p-2 border rounded bg-white text-gray-800"
              />
              <Button
                variant="outline"
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    `${window.location.origin}/${id}`
                  );
                  toast({
                    title: "🎉 Share away!",
                    description:
                      "Form link copied to clipboard, now share to get those videos rolling in!",
                  });
                }}
              >
                <CopyIcon />
              </Button>
            </div>
          </div>
        )} */}
      </div>

      {/* Main Content */}
      <div
        className="flex-1 p-8 flex flex-col"
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
