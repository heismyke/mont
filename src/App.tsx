import Hero from "./components/general/Hero";
import Analytics from "./components/general/Analytics";
import Steps from "./components/general/Steps";
import AnalyticsTool from "./components/general/AnalyticsTool";
import PricingPlans from "./components/general/PricingPlans";
import FAQ from "./components/general/FAQ";
import Footer from "./components/general/Footer";
import Navbar from "./components/general/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto ">
        <Hero />
        <Analytics />
        <Steps />
        <AnalyticsTool />
        <PricingPlans />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
