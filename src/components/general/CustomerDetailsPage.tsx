import { Heart } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useFormContext } from "@/context/FormContext";

interface CustomerDetailsPageProps {
  isDesktop: boolean;
}

const CustomerDetailsPage: React.FC<CustomerDetailsPageProps> = ({
  isDesktop,
}) => {
  const { formState } = useFormContext();
  const { design } = formState;
  const { fields } = formState.customer;
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
          {design.logo.preview ? (
            <img 
              src={design.logo.preview} 
              alt="Logo" 
              className="h-12 w-auto object-contain"
            />
          ) : (
            <Heart 
              className="fill-current" 
              size={48} 
              style={{ color: design.primaryColor }}
            />
          )}
        </div>

          <p className="text-gray-800 font-medium text-xl">Almost done 🙌</p>

          <div className="grid grid-cols-1 gap-4">
            {fields.name.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Name {fields.name.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded text-xs"
                  placeholder="Enter your name"
                  required={fields.name.required}
                />
              </div>
            )}

            {fields.projectName.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Project name {fields.projectName.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded text-xs"
                  placeholder="Enter your project name"
                  required={fields.projectName.required}
                />
              </div>
            )}

            {fields.email.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email {fields.email.required && <span className="text-red-500">*</span>}
                </label>
                <input 
                  type="email" 
                  className="w-full p-2 border rounded text-xs" 
                  placeholder="Enter your email"
                  required={fields.email.required}
                />
              </div>
            )}

            {fields.walletAddress.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Wallet address {fields.walletAddress.required && <span className="text-red-500">*</span>}
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded text-xs" 
                  placeholder="Enter your wallet address"
                  required={fields.walletAddress.required}
                />
              </div>
            )}

            {fields.nationality.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Region {fields.nationality.required && <span className="text-red-500">*</span>}
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded text-xs" 
                  placeholder="Where are you participating from ?"
                  required={fields.nationality.required}
                />
              </div>
            )}

            {fields.photo.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Photo {fields.photo.required && <span className="text-red-500">*</span>}
                </label>

                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={photoPreview || "https://github.com/shadcn.png"}
                      alt="Profile"
                    />
                    <AvatarFallback>PH</AvatarFallback>
                  </Avatar>

                  <div
                    className="border border-gray-300 rounded-md py-2 px-4 flex justify-center items-center w-fit cursor-pointer"
                    onClick={() => document.getElementById("photoInput")?.click()}
                  >
                    <p className="text-xs font-medium">Upload image</p>
                    <input
                      type="file"
                      accept="image/*"
                      id="photoInput"
                      className="hidden"
                      onChange={handlePhotoUpload}
                      required={fields.photo.required}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {fields.comment.enabled && (
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Additional comments {fields.comment.required && <span className="text-red-500">*</span>}
              </label>
              <textarea
                className="w-full p-2 border rounded text-xs"
                rows={4}
                placeholder="Comments"
                required={fields.comment.required}
              />
            </div>
          )}
        </div>

        <div
          className={`text-center ${
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