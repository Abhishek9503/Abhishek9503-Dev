import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { BsArrowUp } from "react-icons/bs";
import { Experience, Playground, Project } from "./pages";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <BrowserRouter>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative z-0 bg-primary">
                <div className="bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <div className="relative z-0">
                    <Hero />
                    <StarsCanvas />
                  </div>
                </div>
                <Tech />
                <About />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
                <Footer />
              </div>
            }
          />
          <Route
            path="/project"
            element={
              <div className="proj_page relative bg-primary">
                <Project />
              </div>
            }
          />
          <Route path="/play" element={<Playground />} />
          <Route
            path="/experience"
            element={
              <div className="bg-primary">
                <Experience />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2 cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;
