import React from "react";

interface CustomerDetailsPageProps {
  isDesktop: boolean;
}

const CustomerDetailsPage: React.FC<CustomerDetailsPageProps> = ({
  isDesktop,
}) => {
  return (
    <div className="relative">
      <div className="absolute top-[-12px] right-4 z-10">
        <button className="bg-white text-xs text-purple-600 hover:text-white hover:bg-purple-700 flex items-center px-3 py-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow">
          Collect testimonials with Mont ↗
        </button>
      </div>

      <div
        className={`bg-white rounded-2xl p-6 shadow-lg mx-auto ${
          isDesktop
            ? "max-w-2xl"
            : "w-[360px] h-[660px] border-4 border-gray-800"
        }`}
      >
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Project Name
              </label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Wallet Address
              </label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Nationality
              </label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Photo</label>
              <input type="file" accept="image/*" className="w-full p-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Comments
            </label>
            <textarea
              className="w-full p-2 border rounded"
              rows={4}
              placeholder="Optional"
            />
          </div>
        </div>

        <div
          className={` text-center ${
            isDesktop ? "mt-10" : "absolute bottom-6 left-0 right-0"
          }`}
        >
          <p className={`text-xs text-gray-300`}>Powered by Mont protocol</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
