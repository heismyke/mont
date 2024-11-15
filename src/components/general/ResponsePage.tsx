import React, { useRef, useState } from "react";
import { Heart, Star, Upload, StopCircle, PictureInPicture, CirclePlay } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useResponseContext } from "@/context/ResponseContext";
import { useLocation, useNavigate } from "react-router-dom";

interface ResponsePageProps {
  isDesktop: boolean;
  onNavigateNext: () => void;
}

const ResponsePage: React.FC<ResponsePageProps> = ({ isDesktop, onNavigateNext }) => {
  const { formState } = useFormContext();
  const { responseState, updateResponse, setRating } = useResponseContext();
  const { response, design, design: { font } } = formState;
  const navigate = useNavigate();
  const location = useLocation();
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordedTime, setRecordedTime] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);


  const useDesktopLayout = location.pathname === "/form" && isDesktop;
  const useMobileLayout = location.pathname === "/form" && !isDesktop;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startRecording = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      const mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Start timer
      timerRef.current = window.setInterval(() => {
        setRecordedTime((prev) => prev + 1);
        updateResponse({ recordingTime: formatTime(recordedTime) });
      }, 1000);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopRecording = async () => {
    if (mediaRecorderRef.current && stream) {
      mediaRecorderRef.current.stop();
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setIsRecording(false);

      // Clear timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      // Handle the recorded chunks
      mediaRecorderRef.current.onstop = async () => {
        const videoBlob = new Blob(chunksRef.current, { type: "video/webm" });
        await uploadToCloudinary(videoBlob);
      };
    }
  };

  const uploadToCloudinary = async (videoBlob: Blob) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", videoBlob);
      formData.append("upload_preset", "mont_uploads"); 

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dgz4c3ahz/video/upload`, 
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      // Update form state with the new video URL
      updateResponse({ videoUrl: data.secure_url });
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setIsUploading(true);
      await uploadToCloudinary(file);
    } else {
      alert("Please select a video file");
    }
  };


  return (
    <div className="relative">
      <div className="absolute top-[-12px] right-4 z-10">
      <button
          className="bg-white text-xs hover:text-white flex items-center px-3 py-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow"
          style={{
            color: design.primaryColor,
            ["--tw-hover-bg" as string]: design.primaryColor,
          }}
          onClick={() => navigate('/')}
        >
          Collect testimonials with Mont 
        </button>
      </div>

      <div
        className={`
          rounded-2xl p-4 shadow-lg mx-auto relative
          ${
            useDesktopLayout
              ? "w-[540px]"
              : useMobileLayout
              ? "w-[360px] h-[660px] border-4 border-gray-800 flex flex-col justify-center"
              : `
                w-full
                sm:w-[360px]
                md:w-[480px]
                lg:w-[560px]
                min-h-[500px]
                flex flex-col justify-center
              `
          }
        `}
        style={{ backgroundColor: design.backgroundColor, fontFamily: font  }}
      >
        <div className="mx-auto space-y-3 sm:space-y-4">
          <div className="flex justify-between items-start mb-2 sm:mb-4">
            {design.logo.preview ? (
              <img
                src={design.logo.preview}
                alt="Logo"
                className="h-8 sm:h-12 w-auto object-contain"
              />
            ) : (
              <Heart
                className="fill-current"
                size={48}
                style={{ color: design.primaryColor }}
              />
            )}
          </div>

          <div>
            <p className="text-gray-800 font-medium text-lg sm:text-xl mb-2 sm:mb-3">
              {response.title}
            </p>

            <ul className="text-sm list-disc text-gray-600 ml-4 mb-2 sm:mb-3">
              {response.prompts.split("\n").map((prompt, index) => (
                <li key={index}>{prompt.replace("- ", "")}</li>
              ))}
            </ul>
          </div>

          {response.enableRating && (
            <div>
              <label className="block text-sm">Rate your experience</label>
              <div className="flex gap-1 sm:gap-2 mt-1">
                {[1, 2, 3, 4, 5].map((ratingValue) => (
                  <button
                    key={ratingValue}
                    onClick={() => setRating(ratingValue)} 
                    className={`focus:outline-none ${responseState.response.rating && responseState.response.rating >= ratingValue ? "text-yellow-500" : "text-gray-300"} hover:text-yellow-500`}
                  >
                    <Star
                      size={18}
                      className={`sm:w-6 sm:h-6 ${
                        responseState.response.rating && responseState.response.rating >= ratingValue ? "fill-current text-yellow-500" : "fill-current text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="bg-black rounded-xl sm:rounded-2xl">
            <div className="aspect-video flex flex-col items-center justify-center relative overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`absolute inset-0 w-full h-full object-cover ${
                  !stream && !responseState.response.videoUrl ? "hidden" : ""
                }`}
                src={responseState.response.videoUrl || ""}
              />

              {!stream && !responseState.response.videoUrl && location.pathname === "/form" && (
                <div
                  style={{
                    backgroundImage: `url('https://utfs.io/f/PKy8oE1GN2J3XLp6Sd83fo9U5AvPYm0IDul7exrc1OS2MyBZ')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="absolute inset-0 w-full h-full rounded-2xl flex flex-col items-center justify-center"
                >
                  <div className="z-10">
                    <p className="text-gray-50 text-center text-xs sm:text-sm font-medium">
                      Preview
                    </p>
                    <p className="text-gray-300 text-center text-xs px-4">
                      Your responder's camera feed will show up here.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between w-full p-3 sm:p-4">
                <span className="text-base sm:text-lg text-gray-300 font-medium">
                  {formatTime(recordedTime)}
                </span>

                <button
                  className={`${
                    isRecording ? "bg-red-700" : "bg-red-700"
                  } hover:opacity-80 text-white rounded-full p-3`}
                  onClick={isRecording ? stopRecording : startRecording}
                  disabled={isUploading}
                >
                  {isRecording ? 
                    <StopCircle size={22} className="sm:w-8 sm:h-8" /> : 
                    <CirclePlay size={22} className="sm:w-8 sm:h-8" />
                  }
                </button>

                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2">
                  <PictureInPicture size={14} />
                </button>
              </div>
            </div>
          </div>

          <Separator />

          <Button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-full"
            size={useDesktopLayout ? "lg" : "default"}
            onClick={() => document.getElementById("videoInput")?.click()}
            disabled={isUploading}
          >
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="hidden"
              id="videoInput"
              disabled={isUploading}
            />
            <Upload size={20} />
            Upload a file
          </Button>

          <Button 
            onClick={onNavigateNext} 
            size={useDesktopLayout ? "lg" : "default"}
            className="w-full"
          >
            Proceed
          </Button>

          {/* <div className={`text-center ${useDesktopLayout ? "mt-10" : "mt-auto pt-6"}`}>
            <p className="text-xs text-gray-300">
              Powered by Mont protocol
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;