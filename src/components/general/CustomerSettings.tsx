import { Mail, Wallet, Globe, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const responderSettings = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <label className="text-sm font-medium">Email</label>
        </div>
        <p className="text-xs text-gray-500">
          Collect responder's email address to stay in touch about new events.
        </p>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded-lg accent-purple-500" />
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
              defaultChecked
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded-lg accent-purple-500" />
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
              defaultChecked
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded-lg accent-purple-500" />
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
              defaultChecked
              className="rounded-lg accent-purple-500"
            />
            <span className="text-xs text-gray-600">Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded-lg accent-purple-500" />
            <span className="text-xs text-gray-600">Required</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default responderSettings;
