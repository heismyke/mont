import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "../ui/input";
import { useFormContext } from "@/context/FormContext";

const ResponseSettings = () => {
    const { formState, updateResponse } = useFormContext();
    const { response } = formState;
  
    return (
      <div className="space-y-4">
        <div>
          <label className="block text-xs text-gray-600 mb-2">
            Response page title
          </label>
          <Input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            value={response.title}
            onChange={(e) => updateResponse({ title: e.target.value })}
          />
        </div>
  
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <label className="block text-xs text-gray-600">Prompt</label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <QuestionMarkCircledIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Use this to help your responders know what to say</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
  
          <Textarea
            className="w-full border rounded h-32 text-sm"
            value={response.prompts}
            onChange={(e) => updateResponse({ prompts: e.target.value })}
          />
        </div>
  
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableRating"
            className="mr-2 rounded-lg accent-purple-500"
            checked={response.enableRating}
            onChange={(e) => updateResponse({ enableRating: e.target.checked })}
          />
          <label htmlFor="enableRating" className="text-xs text-gray-600">
            Enable Rating
          </label>
        </div>
      </div>
    );
  };

export default ResponseSettings;
