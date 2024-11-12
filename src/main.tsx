import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Routes.tsx";
import { FormProvider } from "./context/FormContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormProvider>
      <AppRoutes />
    </FormProvider>
  </StrictMode>
);
