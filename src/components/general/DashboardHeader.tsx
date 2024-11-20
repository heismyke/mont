

const DashboardHeader = () => {
  return (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center gap-3 text-center md:text-left w-full md:w-auto ">
          <div className="hidden md:block">
            <h2 className="font-medium text-gray-800 text-base">
              Give your whole team access
            </h2>
            <p className="text-xs text-gray-500">
              Invite your team to manage this account
            </p>
          </div>
          <h2 className="font-medium text-gray-800 text-base md:text-lg ml-12 md:hidden ">
             Dashboard
            </h2>
        </div>

        <div className=" flex-col sm:flex-row items-center gap-3 w-full md:w-auto hidden md:flex">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-auto border border-gray-200 text-gray-800 rounded-lg px-3 py-2 text-sm"
          />
          <select className="w-full sm:w-auto border border-gray-200 rounded-lg px-3 py-2 text-gray-700 text-sm">
            <option>Editor</option>
          </select>
          <button className="w-full sm:w-auto bg-[#6366F1] text-white text-sm px-4 py-2 rounded-lg">
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;