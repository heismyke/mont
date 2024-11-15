import { Mail, Wallet, Globe, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useFormContext } from "@/context/FormContext";

const ResponderSettings = () => {
  const { formState, updateFormState } = useFormContext();
  const { fields } = formState.customer;

  const handleFieldUpdate = (field: keyof typeof fields, type: 'enabled' | 'required', value: boolean) => {
    updateFormState('customer', {
      fields: {
        ...fields,
        [field]: {
          ...fields[field],
          [type]: value
        }
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <label className="text-sm font-medium">Project Name</label>
        </div>
        <p className="text-xs text-gray-500">
          Collect responder's project name to help identify their BUIDL.
        </p>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={fields.projectName.enabled}
              onChange={(e) => handleFieldUpdate('projectName', 'enabled', e.target.checked)}
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <input 
              type="checkbox"
              checked={fields.projectName.required}
              onChange={(e) => handleFieldUpdate('projectName', 'required', e.target.checked)}
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Required</span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Wallet className="w-4 h-4 text-gray-500" />
          <label className="text-sm font-medium">Wallet Address</label>
        </div>
        <p className="text-xs text-gray-500">
          Collect responder's wallet address for winning payout.
        </p>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={fields.walletAddress.enabled}
              onChange={(e) => handleFieldUpdate('walletAddress', 'enabled', e.target.checked)}
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={fields.walletAddress.required}
              onChange={(e) => handleFieldUpdate('walletAddress', 'required', e.target.checked)}
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Required</span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-500" />
          <label className="text-sm font-medium">Nationality</label>
        </div>
        <p className="text-xs text-gray-500">
          Collect information about responder's nationality to know where they are hacking from.
        </p>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={fields.nationality.enabled}
              onChange={(e) => handleFieldUpdate('nationality', 'enabled', e.target.checked)}
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={fields.nationality.required}
              onChange={(e) => handleFieldUpdate('nationality', 'required', e.target.checked)}
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Required</span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-gray-500" />
          <label className="text-sm font-medium">Comments</label>
        </div>
        <p className="text-xs text-gray-500">
          Allow responders to provide additional comments.
        </p>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={fields.comment.enabled}
              onChange={(e) => handleFieldUpdate('comment', 'enabled', e.target.checked)}
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={fields.comment.required}
              onChange={(e) => handleFieldUpdate('comment', 'required', e.target.checked)}
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Required</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponderSettings;