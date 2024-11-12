import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Routes.tsx";
import { FormProvider } from "./context/FormContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "@/components/ui/toaster"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <FormProvider>
        <AppRoutes />
        <Toaster />
      </FormProvider>
    </AuthProvider>
  </StrictMode>
);