import { Heart } from "lucide-react";

const DesignSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-gray-600 mb-1">Logo</label>

        <div
          className="border border-gray-300 rounded-md px-12 py-3 flex justify-center items-center w-fit cursor-pointer"
          onClick={() => document.getElementById("logoInput")?.click()}
        >
         <Heart className="text-purple-700 fill-purple-700" size={48} />
          <input
            type="file"
            accept="image/*"
            id="logoInput"
            className="w-full hidden"
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
                className="absolute w-8 h-8 cursor-pointer opacity-0"
                onChange={(e) => {
                  const color = e.target.value;
                  document.getElementById("primaryColorHex")!.innerText = color;
                  document.getElementById(
                    "primaryColorPreview"
                  )!.style.backgroundColor = color;
                }}
                defaultValue="#000000"
              />
              <div
                id="primaryColorPreview"
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <span className="ml-2 text-sm" id="primaryColorHex">
              #000000
            </span>
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
                className="absolute w-8 h-8 cursor-pointer opacity-0"
                onChange={(e) => {
                  const color = e.target.value;
                  document.getElementById("backgroundColorHex")!.innerText =
                    color;
                  document.getElementById(
                    "backgroundColorPreview"
                  )!.style.backgroundColor = color;
                }}
                defaultValue="#ffffff"
              />
              <div
                id="backgroundColorPreview"
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: "#ffffff" }}
              ></div>
            </div>
            <span className="ml-2 text-sm" id="backgroundColorHex">
              #ffffff
            </span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">Font </label>
        <select className="w-full p-2 border rounded text-sm">
          <option>Inter</option>
          <option>Roboto</option>
          <option>Open Sans</option>
        </select>
      </div>
    </div>
  );
};

export default DesignSettings;
