import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ResponseSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <label className="block text-xs text-gray-600 ">Prompt</label>

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
          defaultValue={`- What do you like about Mont?
- Would you recommend Mont to a friend?`}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="enableRating"
          className="mr-2 rounded-lg accent-purple-500"
          defaultChecked
        />
        <label htmlFor="enableRating" className="text-xs text-gray-600">
          Enable Rating
        </label>
      </div>
    </div>
  );
};

export default ResponseSettings;
