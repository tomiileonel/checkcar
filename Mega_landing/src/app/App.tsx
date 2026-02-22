import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { CTABanner } from "./components/CTABanner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080818" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}
