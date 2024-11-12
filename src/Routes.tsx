import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard";
import TestimonialForm from "./pages/Testimonial";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginForm />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/form" 
            element={
              <ProtectedRoute>
                <TestimonialForm />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/forms/:id" 
            element={
              <ProtectedRoute>
                <TestimonialForm />
              </ProtectedRoute>
            } 
          />
          <Route path="/form/:id" element={<TestimonialForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;