const DashboardHeader = () => {
  return (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="font-medium text-gray-800">
              Give your whole team access
            </h2>
            <p className="text-xs text-gray-500">
              Invite your team to manage this account
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-200 text-gray-800 rounded-lg px-3 py-2 text-sm"
          />
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-gray-700 text-sm">
            <option>Editor</option>
          </select>
          <button className="bg-[#6366F1] text-white text-sm px-4 py-2 rounded-lg">
            
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
