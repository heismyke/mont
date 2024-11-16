import React from "react";
import { Heart, UploadIcon } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import { Button } from "../ui/button";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Switch } from "../ui/switch";


const DesignSettings = () => {
  const {
    formState,
    updateFormState,
    updateDesign,
    handleLogoUpload,
    handleBackgroundUpload,
  } = useFormContext();
  const { primaryColor, backgroundColor, font, logo } = formState.design;

  const handleLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleLogoUpload(file);
    }
  };

  const handleBackground = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleBackgroundUpload(file);
    }
  };

  const toggleBackground = () => {
    if (formState.design.background.preview !== null) {
      updateDesign({ background: { file: null, preview: null } });
    } else {
      updateDesign({
        background: {
          file: null,
          preview:
            "https://utfs.io/f/PKy8oE1GN2J3t4MUvdkvpN1sulgB5tndmrzYhToROK9e3EVa",
        },
      });
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
            onChange={handleLogo}
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

      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <label className="block text-xs text-gray-600">
              Background Image
            </label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <QuestionMarkCircledIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>You can add a graphic of your event</p>
                  <p> or disable to use a default gradient</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Switch
            checked={formState.design.background.preview !== null}
            onCheckedChange={toggleBackground}
          />
        </div>

        <div
          className=""
          onClick={() => document.getElementById("backgroundInput")?.click()}
        >
          <Button variant={"outline"} className="w-full" size={"lg"}>
            <UploadIcon />
            Upload
          </Button>
          <input
            type="file"
            accept="image/*"
            id="backgroundInput"
            className="w-full hidden"
            onChange={handleBackground}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignSettings;
