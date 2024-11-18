import { useFormContext } from "@/context/FormContext";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Switch from "@/components/ui/Switch";

const AdvancedSettings = () => {
  const { formState, updateFormState } = useFormContext();

  const disableMontBanner = () => {
    updateFormState("form", { form_ad: false });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <label className="block text-xs text-gray-600">
            Disable Mont banner
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
      </div>
    </div>
  );
};

export default AdvancedSettings;
