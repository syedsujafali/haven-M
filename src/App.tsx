import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Sectors } from "./components/Sectors";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTABanner } from "./components/CTABanner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingElements } from "./components/FloatingElements";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}