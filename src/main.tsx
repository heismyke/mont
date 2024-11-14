import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Routes.tsx";
import { FormProvider } from "./context/FormContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "@/components/ui/toaster"
import { ResponseProvider } from "./context/ResponseContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <FormProvider>
      <ResponseProvider>
        <AppRoutes />
        <Toaster />
      </ResponseProvider>
      </FormProvider>
    </AuthProvider>
  </StrictMode>
);