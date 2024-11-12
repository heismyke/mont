import { useFormContext } from "@/context/FormContext";

// Thank You Settings Component
const ThankYouSettings = () => {
  const { formState, updateFormState } = useFormContext();
  const { thanks } = formState;

  const handleChange = (field: keyof typeof thanks, value: string) => {
    updateFormState('thanks', {
      [field]: value
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-gray-600 mb-1">Page Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded text-gray-800 text-sm"
          value={thanks.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">Message</label>
        <textarea
          className="w-full p-2 border rounded text-gray-800 text-sm"
          rows={4}
          value={thanks.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />
      </div>
    </div>
  );
};

export default ThankYouSettings;
