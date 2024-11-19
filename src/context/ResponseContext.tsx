/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface ResponseState {
  feedback: {
    id?: string;
    form_title?: string;
  };
  response: {
    rating: number | null;
    videoPreview: string | null;
    videoUrl: string | null;
    recordingTime: string;
  };
  customerInputs: {
    name: string | null;
    projectName: string | null;
    email: string | null;
    walletAddress: string | null;
    photo: string | null;
    nationality: string | null;
    comment: string | null;
  };
}

const initialResponseState: ResponseState = {
  feedback: {
    id: "",
    form_title: "",
  },
  response: {
    rating: null,
    videoPreview: null,
    videoUrl: null,
    recordingTime: "00:00",
  },
  customerInputs: {
    name: "",
    projectName: "",
    email: "",
    walletAddress: "",
    photo: "",
    nationality: "",
    comment: "",
  },
};

interface ResponseContextType {
  responseState: ResponseState;
  setRating: (rating: number) => void;
  responses: {
    id: string;
    creator_id: string;
    form_id: string;
    name: string | null;
    responseState: ResponseState;
    date: string;
    isFavorite: boolean;
  }[];
  saveResponse: (
    id: string,
    form_title: string,
    creator_id: string
  ) => Promise<void>;
  loadResponses: (creatorId: string) => Promise<void>;
  loadResponsesByFavorites: (creatorId: string) => Promise<void>;
  loadResponsesByForm: (formId: string) => Promise<void>;
  updateResponse: (updates: Partial<ResponseState["response"]>) => void;
  updateFeedback: (id: string, form_title: string) => void;
  updateDetails: (updates: Partial<ResponseState["customerInputs"]>) => void;
  toggleFavorite: (responseId: string) => Promise<void>;
}

const ResponseContext = createContext<ResponseContextType | undefined>(
  undefined
);

export const useResponseContext = () => {
  const context = useContext(ResponseContext);
  if (!context) {
    throw new Error(
      "useResponseContext must be used within a ResponseProvider"
    );
  }
  return context;
};

export const ResponseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [responseState, setResponseState] =
    useState<ResponseState>(initialResponseState);
  const [responses, setResponses] = useState<
    {
      id: string;
      creator_id: string;
      form_id: string;
      name: string | null;
      responseState: ResponseState;
      date: string;
      isFavorite: boolean;
    }[]
  >([]);

  const { toast } = useToast();

  const setRating = (rating: number) => {
    setResponseState((prev) => ({
      ...prev,
      response: {
        ...prev.response,
        rating,
      },
    }));
  };

  const saveResponse = async (
    id: string,
    form_title: string,
    creator_id: string
  ) => {
    try {
      const updatedState = {
        ...responseState,
        feedback: {
          id: id,
          form_title: form_title,
        },
      };

      const { error } = await supabase.from("responses").insert({
        form_id: id,
        creator_id: creator_id,
        form_title: form_title,
        response_state: updatedState,
        created_at: new Date().toISOString(),
        isFavorite: false, 
      });

      if (error) throw error;

      setResponseState(updatedState);

      toast({
        title: "Success",
        description: "Response saved successfully",
      });
    } catch (error) {
      console.error("Error saving response:", error);
      toast({
        title: "Error",
        description: "Failed to save response",
        variant: "destructive",
      });
    }
  };

  const toggleFavorite = async (responseId: string) => {
    try {
      const response = responses.find((r) => r.id === responseId);
      if (!response) return;

      const newFavoriteStatus = !response.isFavorite;

      const { error } = await supabase
        .from("responses")
        .update({ isFavorite: newFavoriteStatus })
        .eq("id", responseId);

      if (error) throw error;

      setResponses((prev) =>
        prev.map((response) =>
          response.id === responseId
            ? { ...response, isFavorite: newFavoriteStatus }
            : response
        )
      );

      toast({
        title: "Success",
        description: newFavoriteStatus
          ? "Added to favorites"
          : "Removed from favorites",
      });
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast({
        title: "Error",
        description: "Failed to update favorite status",
        variant: "destructive",
      });
    }
  };

  const loadResponses = async (creatorId: string) => {
    try {
      const { data, error } = await supabase
        .from("responses")
        .select("*")
        .eq("creator_id", creatorId);

      if (error) throw error;
      if (data) {
        const responses = data?.map(
          (response: {
            id: string;
            form_id: string;
            creator_id: string;
            form_title: string | null;
            response_state: ResponseState;
            created_at: string;
            isFavorite: boolean;
          }) => ({
            id: response.id,
            creator_id: response.creator_id,
            form_id: response.form_id,
            name: response.form_title || null,
            responseState: response.response_state,
            date: new Date(response.created_at).toISOString(),
            isFavorite: response.isFavorite || false,
          })
        );
        setResponses(responses || []);
      }
    } catch (error) {
      console.error("Error loading responses:", error);
      toast({
        title: "Error",
        description: "Failed to load responses",
        variant: "destructive",
      });
    }
  };

  const loadResponsesByFavorites = async (creatorId: string) => {
    try {
      const { data, error } = await supabase
        .from("responses")
        .select("*")
        .eq("creator_id", creatorId)
        .eq("isFavorite", true);

      if (error) throw error;
      if (data) {
        const responses = data?.map(
          (response: {
            id: string;
            form_id: string;
            creator_id: string;
            form_title: string | null;
            response_state: ResponseState;
            created_at: string;
            isFavorite: boolean;
          }) => ({
            id: response.id,
            creator_id: response.creator_id,
            form_id: response.form_id,
            name: response.form_title || null,
            responseState: response.response_state,
            date: new Date(response.created_at).toISOString(),
            isFavorite: response.isFavorite || false,
          })
        );
        setResponses(responses || []);
      }
    } catch (error) {
      console.error("Error loading responses:", error);
      toast({
        title: "Error",
        description: "Failed to load responses",
        variant: "destructive",
      });
    }
  };

  const loadResponsesByForm = async (formId: string) => {
    try {
      const { data, error } = await supabase
        .from("responses")
        .select("*")
        .eq("form_id", formId);

      if (error) throw error;
      if (data) {
        const responses = data?.map(
          (response: {
            id: string;
            form_id: string;
            creator_id: string;
            form_title: string | null;
            response_state: ResponseState;
            created_at: string;
            isFavorite: boolean;
          }) => ({
            id: response.id,
            creator_id: response.creator_id,
            form_id: response.form_id,
            name: response.form_title || null,
            responseState: response.response_state,
            date: new Date(response.created_at).toISOString(),
            isFavorite: response.isFavorite || false,
          })
        );
        setResponses(responses || []);
      }
    } catch (error) {
      console.error("Error loading responses:", error);
      toast({
        title: "Error",
        description: "Failed to load responses",
        variant: "destructive",
      });
    }
  };

  const updateResponse = (updates: Partial<ResponseState["response"]>) => {
    setResponseState((prev) => ({
      ...prev,
      response: {
        ...prev.response,
        ...updates,
      },
    }));
  };

  const updateFeedback = (id: string, form_title: string) => {
    setResponseState((prev) => ({
      ...prev,
      feedback: {
        ...prev.feedback,
        id: id,
        form_title: form_title,
      },
    }));
  };

  const updateDetails = (updates: Partial<ResponseState["customerInputs"]>) => {
    setResponseState((prev) => ({
      ...prev,
      customerInputs: {
        ...prev.customerInputs,
        ...updates,
      },
    }));
  };

  return (
    <ResponseContext.Provider
      value={{
        responseState,
        setRating,
        responses,
        saveResponse,
        loadResponses,
        loadResponsesByFavorites,
        loadResponsesByForm,
        updateResponse,
        updateDetails,
        updateFeedback,
        toggleFavorite,
      }}
    >
      {children}
    </ResponseContext.Provider>
  );
};
