import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useState, useEffect, useCallback } from "react";
import { BsArrowUp } from "react-icons/bs";
import { Experience, Playground, Project } from "./pages";
import Statisticspage from "./components/MainPage/Statisticspage";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = useCallback(() => {
    setShowBackToTop(window.scrollY > 300);
  }, []);

  useEffect(() => {
    let scrollTimeout;

    // Throttle the scroll event
    const throttledScrollHandler = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 100); // 100ms throttle
      }
    };

    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Home page content
  const HomePage = () => (
    <div className="flex flex-col gap-20 relative z-0 bg-primary">
      <div className="relative z-0">
        <Hero />
      </div>
      <Tech />
      <About />
      {/* <Works /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>

      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2 cursor-pointer backToTop"
          onClick={handleBackToTop}
          aria-label="Back to top"
        >
          <BsArrowUp />
        </button>
      )}
    </div>
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<div className="proj_page relative bg-primary"><Project /></div>} />
        <Route path="/play" element={<Playground />} />
        <Route path="/experience" element={<div className="bg-primary"><Experience /></div>} />
        <Route path="/statistics" element={<div className="bg-primary"><Statisticspage /></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
