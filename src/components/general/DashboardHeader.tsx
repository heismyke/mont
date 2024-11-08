import { User2Icon } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gray-100">
            <User2Icon className="w-5 h-5 text-black" />
          </div>
          <div>
            <h2 className="font-medium text-gray-800">Give your whole team access</h2>
            <p className="text-xs text-gray-500">
              Invite your team to manage this account
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-200 rounded-lg px-3 py-2"
          />
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-gray-700">
            <option>Editor</option>
          </select>
          <button className="bg-[#6366F1] text-white px-4 py-2 rounded-lg">
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader; 