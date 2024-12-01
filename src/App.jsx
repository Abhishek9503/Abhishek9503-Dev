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
import Statisticspage from "./components/MainPage/Statisticspage";

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

          <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative z-0 bg-primary">
                  <div className="relative z-0">
                    <Hero />
                   </div>
                <Tech />
                <About />
                <Works />
                {/* <Feedbacks /> */}
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
                {/* <Footer /> */}

                {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2 cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
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
          <Route
            path="/statistics"
            element={
              <div className="bg-primary">
                <Statisticspage/>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>

     
    </div>
  );
};

export default App;
