import { useFormContext } from "@/context/FormContext";
import { Textarea } from "../ui/textarea";

const WelcomeSettings = () => {
  const { formState, updateWelcome } = useFormContext();

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs text-gray-600 mb-1">
          Welcome Page Title
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          value={formState.welcome.title}
          onChange={(e) => updateWelcome({ title: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">
          Introductory Message
        </label>
        <Textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          value={formState.welcome.subtitle}
          onChange={(e) => updateWelcome({ subtitle: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-1">Prompts</label>
        <Textarea
            className="w-full border rounded h-28 text-sm"
            value={formState.welcome.prompts}
            onChange={(e) => updateWelcome({ prompts: e.target.value })}
          />
      </div>
     

      <div>
        <label className="block text-xs text-gray-600 mb-1">Button Text</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          value={formState.welcome.buttonText}
          onChange={(e) => updateWelcome({ buttonText: e.target.value })}
        />
      </div>
    </div>
  );
};

export default WelcomeSettings;
