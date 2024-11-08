import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard";
import TestimonialForm from "./components/general/TestimonialForm";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<TestimonialForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
