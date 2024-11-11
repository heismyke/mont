import { Heart } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
            ? "w-[540px] px-6"
            : "w-[360px] h-[660px] border-4 border-gray-800 overflow-y-auto"
        }`}
      >
        <div className="mx-auto space-y-4">
          <div className="flex justify-between items-start mb-4">
            <Heart className="text-purple-700 fill-purple-700" size={48} />
          </div>

          <p className="text-gray-800 font-medium text-xl">Almost done 🙌</p>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-xs"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Project name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-xs"
                placeholder="Enter your project name"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded text-xs" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Wallet address
              </label>
              <input type="text" className="w-full p-2 border rounded text-xs" placeholder="Enter your wallet address" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Region
              </label>
              <input type="text" className="w-full p-2 border rounded text-xs" placeholder="Where are you participating from ?" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Photo</label>

              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div
                  className="border border-gray-300 rounded-md py-2 px-4 flex justify-center items-center w-fit cursor-pointer"
                  onClick={() => document.getElementById("logoInput")?.click()}
                >
                  <p className="text-xs font-medium">Upload image</p>
                  <input
                    type="file"
                    accept="image/*"
                    id="logoInput"
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Additional comments
            </label>
            <textarea
              className="w-full p-2 border rounded text-xs"
              rows={4}
              placeholder="Comments"
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
