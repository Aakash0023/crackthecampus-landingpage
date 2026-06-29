import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Showcase from "./components/Showcase/Showcase";
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
      <Showcase />
      <PlatformPreview />
      <Stats />

      <Courses />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
