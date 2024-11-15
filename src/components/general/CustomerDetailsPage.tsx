import { Heart } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useFormContext } from "@/context/FormContext";
import { useResponseContext } from "@/context/ResponseContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useLocation } from "react-router-dom";

interface CustomerDetailsPageProps {
  isDesktop: boolean;
  onNavigateNext: () => void;
}

const CustomerDetailsPage: React.FC<CustomerDetailsPageProps> = ({
  isDesktop,
  onNavigateNext,
}) => {
  const { formState } = useFormContext();
  const { design, design: { font } } = formState;
  const { responseState, updateDetails, saveResponse } = useResponseContext();
  const { customerInputs } = responseState;
  const location = useLocation();
  
  // Only apply isDesktop layout on /form route
  const useDesktopLayout = location.pathname === "/form" && isDesktop;
  const useMobileLayout = location.pathname === "/form" && !isDesktop;

  const { fields } = formState.customer;
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "your_upload_preset");
        formData.append("cloud_name", "your_cloud_name");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        setPhotoPreview(data.url);
        updateDetails({ photo: data.url });
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleSave = async () => {
    const feedback_id = formState.form.id || "";
    const form_creator_id = formState.form.creatorId || "";
    const form_title = formState.form.form_title || "";

    await saveResponse(feedback_id, form_title, form_creator_id);
    onNavigateNext();
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];


  return (
    <div className="relative">
      <div className="absolute top-[-12px] right-4 z-10">
        <button
          className="bg-white text-xs hover:text-white flex items-center px-3 py-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow"
          style={{
            color: design.primaryColor,
            ["--tw-hover-bg" as string]: design.primaryColor,
          }}
        >
          Collect testimonials with Mont ↗
        </button>
      </div>

      <div
        className={`
          rounded-2xl p-4 shadow-lg mx-auto relative
          ${
            useDesktopLayout
              ? "w-[540px]"
              : useMobileLayout
              ? "w-[360px] h-[660px] border-4 border-gray-800 flex flex-col justify-center overflow-y-auto "
              : `
                
                w-[360px]
                md:w-[480px]
                lg:w-[560px]
                min-h-[500px]
                flex flex-col justify-center
              `
          }
        `}
        style={{ backgroundColor: design.backgroundColor, fontFamily: font  }}
      >
        <div className="space-y-4">
        <div className="flex justify-between items-start mb-2 sm:mb-4">
            {design.logo.preview ? (
              <img
                src={design.logo.preview}
                alt="Logo"
                className="h-8 sm:h-12 w-auto object-contain"
              />
            ) : (
              <Heart
                className={`fill-current ${useMobileLayout ? "mt-40" : ""}`}
                size={48}
                style={{ color: design.primaryColor }}
              />
            )}
          </div>

          <p className="text-gray-800 font-medium text-lg sm:text-xl">Almost done 🙌</p>

          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {fields.name.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Name {fields.name.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded text-xs sm:text-sm"
                  placeholder="Enter your name"
                  required={fields.name.required}
                  value={customerInputs.name || ""}
                  onChange={(e) => updateDetails({ name: e.target.value })}
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
                  className="w-full p-2 border rounded text-xs sm:text-sm"
                  placeholder="Enter your project name"
                  required={fields.projectName.required}
                  value={customerInputs.projectName || ""}
                  onChange={(e) => updateDetails({ projectName: e.target.value })}
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
                  className="w-full p-2 border rounded text-xs sm:text-sm"
                  placeholder="Enter your email"
                  required={fields.email.required}
                  value={customerInputs.email || ""}
                  onChange={(e) => updateDetails({ email: e.target.value })}
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
                  className="w-full p-2 border rounded text-xs sm:text-sm"
                  placeholder="Enter your wallet address"
                  required={fields.walletAddress.required}
                  value={customerInputs.walletAddress || ""}
                  onChange={(e) => updateDetails({ walletAddress: e.target.value })}
                />
              </div>
            )}

            {fields.nationality.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Region {fields.nationality.required && <span className="text-red-500">*</span>}
                </label>
                <Select
                  value={customerInputs.nationality || ""}
                  onValueChange={(value) => updateDetails({ nationality: value })}
                >
                  <SelectTrigger className="w-full text-xs sm:text-sm">
                    <SelectValue placeholder="Select Your Region" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                    <p className="text-xs sm:text-sm font-medium">Upload image</p>
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

            {fields.comment.enabled && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Additional comments {fields.comment.required && <span className="text-red-500">*</span>}
                </label>
                <textarea
                  className="w-full p-2 border rounded text-xs sm:text-sm"
                  rows={4}
                  placeholder="Comments"
                  required={fields.comment.required}
                  value={customerInputs.comment || ""}
                  onChange={(e) => updateDetails({ comment: e.target.value })}
                />
              </div>
            )}
          </div>

          <Button
            size="lg"
            className="w-full mt-4"
            style={{ backgroundColor: design.primaryColor }}
            onClick={handleSave}
          >
            Submit Response
          </Button>
        </div>

        {/* <div
          className={`text-center ${
            useDesktopLayout 
              ? "mt-10" 
              : "absolute bottom-6 left-0 right-0"
          }`}
        >
          <p className="text-xs text-gray-300">Powered by Mont protocol</p>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerDetailsPage;

 
 