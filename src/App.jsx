import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Stats from "./components/Stats/Stats";
import PlatformPreview from "./components/PlatformPreview/PlatformPreview";
import Courses from "./components/Courses/Courses";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PlatformPreview />
      <Stats />

      <Courses />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
