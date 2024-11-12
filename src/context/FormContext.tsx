import React, { createContext, useContext, useState } from "react";

// Define the types for our form state
interface FormState {
  design: {
    logo: {
      file: File | null;
      preview: string | null;
    };
    primaryColor: string;
    backgroundColor: string;
    font: string;
    gradient: {
      from: string;
      to: string;
    };
  };
  welcome: {
    title: string;
    subtitle: string;
    prompts: string;
    buttonText: string;
    showTestimonialButton: boolean;
  };
  response: {
    title: string;
    prompts: string;
    enableRating: boolean;
    rating: number | null;
    videoPreview: string | null;
    videoUrl: string | null;
    recordingTime: string;
  };
  customer: {
    fields: {
      name: { required: boolean; enabled: boolean };
      projectName: { required: boolean; enabled: boolean };
      email: { required: boolean; enabled: boolean };
      walletAddress: { required: boolean; enabled: boolean };
      photo: { required: boolean; enabled: boolean };
      nationality: { required: boolean; enabled: boolean };
      comment: { required: boolean; enabled: boolean };
    };
  };
  thanks: {
    title: string;
    message: string;
  };
}

// Create the initial state
const initialFormState: FormState = {
  design: {
    logo: {
      file: null,
      preview: null,
    },
    primaryColor: "#6D28D9", // purple-700
    backgroundColor: "#ffffff",
    font: "Roboto Mono",
    gradient: {
      from: "#9333EA",
      to: "#1E3A8A",
    },
  },
  welcome: {
    title: "Share a testimonial!",
    subtitle: "Do you love using our product? We'd love to hear about it!",
    prompts:
      "- Share your experience with a quick video testimonial\n- Recording a video? Don't forget to smile 😊",
    buttonText: "Record a video",
    showTestimonialButton: false,
  },
  response: {
    title: "Record a video feedback",
    prompts:
      "- What do you like about Mont?\n- Would you recommend Mont to a friend?",
    enableRating: true,
    rating: null,
    videoPreview: null,
    videoUrl: null,
    recordingTime: "00:00",
  },
  customer: {
    fields: {
      name: { required: true, enabled: true },
      projectName: { required: true, enabled: true },
      email: { required: true, enabled: true },
      walletAddress: { required: false, enabled: true },
      photo: { required: false, enabled: true },
      nationality: { required: false, enabled: true },
      comment: { required: false, enabled: true },
    },
  },
  thanks: {
    title: "Thanks for leaving us feedback 🙏",
    message:
      "Thank you so much for your support! We appreciate your support and participation in making our hackathon better!",
  },
};

// Create the context
interface FormContextType {
  formState: FormState;
  handleLogoUpload: (file: File) => void;
  updateWelcome: (updates: Partial<FormState["welcome"]>) => void;
  updateFormState: (
    section: keyof FormState,
    newData: Partial<FormState[keyof FormState]>
  ) => void;
  updateResponse: (updates: Partial<FormState["response"]>) => void;
  setRating: (rating: number) => void;
  activeView: string;
  setActiveView: (view: string) => void;
  expandedItem: string | null;
  setExpandedItem: (item: string | null) => void;
  isDesktop: boolean;
  setIsDesktop: (isDesktop: boolean) => void;
}

const FormContext = createContext<FormContextType | null>(null);

// Create a custom hook to use the form context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

// Create the provider component
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [activeView, setActiveView] = useState<string>("design");
  const [expandedItem, setExpandedItem] = useState<string | null>("design");
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const handleLogoUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      updateFormState("design", {
        logo: {
          file: file,
          preview: reader.result as string,
        },
      });
    };
    reader.readAsDataURL(file);
  };

  const updateWelcome = (updates: Partial<FormState["welcome"]>) => {
    setFormState((prev) => ({
      ...prev,
      welcome: {
        ...prev.welcome,
        ...updates,
      },
    }));
  };

  const updateResponse = (updates: Partial<FormState["response"]>) => {
    setFormState((prev) => ({
      ...prev,
      response: {
        ...prev.response,
        ...updates,
      },
    }));
  };

  const setRating = (rating: number) => {
    setFormState((prev) => ({
      ...prev,
      response: {
        ...prev.response,
        rating,
      },
    }));
  };

  const updateFormState = (
    section: keyof FormState,
    newData: Partial<FormState[keyof FormState]>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...newData,
      },
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        handleLogoUpload,
        updateWelcome,
        updateResponse,
        setRating,
        updateFormState,
        activeView,
        setActiveView,
        expandedItem,
        setExpandedItem,
        isDesktop,
        setIsDesktop,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
