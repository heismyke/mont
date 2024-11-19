import Hero from "./components/general/Hero";
import Steps from "./components/general/Steps";
import Brands from "./components/general/Brands";
import Footer from "./components/general/Footer";
import Navbar from "./components/general/Navbar";
import WhyUsSection from "./components/general/WhyMont";

function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto ">
        <Hero />
        <Brands />
        <Steps />
        <WhyUsSection/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
