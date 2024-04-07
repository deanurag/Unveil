import "./App.css";
import CTA from "./components/CTA.jsx";
import Features from "./components/Features";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonies from "./components/Testimonies";
import Tickertape from "./components/Tickertape.jsx";

function App() {
  return (
    <div>
      <Tickertape />
      <Navbar />
      <Hero />
      <Features />
      {/* <Testimonies /> */}
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
