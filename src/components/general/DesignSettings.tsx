import React from "react";
import { Heart } from "lucide-react";
import { useFormContext } from "@/context/FormContext";

const DesignSettings = () => {
  const { formState, updateFormState, handleLogoUpload } = useFormContext();
  const { primaryColor, backgroundColor, font, logo } = formState.design;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleLogoUpload(file);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-gray-600 mb-1">Logo</label>
        <div
          className="border border-gray-300 rounded-md px-12 py-3 flex justify-center items-center w-fit cursor-pointer"
          onClick={() => document.getElementById("logoInput")?.click()}
        >
          {logo.preview ? (
            <img
              src={logo.preview}
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
          ) : (
            <Heart className="text-purple-700 fill-purple-700" size={48} />
          )}
          <input
            type="file"
            accept="image/*"
            id="logoInput"
            className="w-full hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Primary Color
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 relative">
            <div className="flex items-center justify-center">
              <input
                type="color"
                value={primaryColor}
                className="absolute w-8 h-8 cursor-pointer opacity-0"
                onChange={(e) => {
                  const color = e.target.value;
                  updateFormState("design", { primaryColor: color });
                }}
              />
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
            </div>
            <span className="ml-2 text-sm">{primaryColor}</span>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Background Color
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 relative">
            <div className="flex items-center justify-center">
              <input
                type="color"
                value={backgroundColor}
                className="absolute w-8 h-8 cursor-pointer opacity-0"
                onChange={(e) => {
                  const color = e.target.value;
                  updateFormState("design", { backgroundColor: color });
                }}
              />
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: backgroundColor }}
              />
            </div>
            <span className="ml-2 text-sm">{backgroundColor}</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">Font</label>
        <select
          className="w-full p-2 border rounded text-sm"
          value={font}
          onChange={(e) => updateFormState("design", { font: e.target.value })}
        >
          <option>Roboto Mono</option>
          <option>Inter</option>
          <option>Open Sans</option>
        </select>
      </div>
    </div>
  );
};

export default DesignSettings;
