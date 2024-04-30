// import { BrowserRouter } from "react-router-dom";
// import {About,Contact, Experience, Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
// import Tweets from "./components/Tweets";
// import { useState, useEffect } from "react";
// import CV from "./components/CV";
// import Footer from "./components/Footer";
// import { BsArrowUp } from 'react-icons/bs'
// // import PreLoader from "./components/PreLoader";
// // import { RingLoader } from "react-spinners";
// const  App=()=> {

//   const [showBackToTop, setShowBackToTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > -0.1) {
//         setShowBackToTop(true);
//       } else {
//         setShowBackToTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleBackToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (

//     <>
//     {/* <PreLoader/> */}

//     <BrowserRouter>

//  <div className="relative z-0 bg-black">
//    <div className=" bg-black bg-cover bg-no-repeat bg-center">

//      <Navbar/>
//      <Hero/>
//    </div>
//    <About/>
//    <Tweets/>
//    <Experience/>
//    <Tech/>
//    <Works/>
//    <Feedbacks/>

//    <div className="relative z-0">
//      <Contact/>
//      <StarsCanvas/>
//    </div>

//   <Footer/>

//  </div>
//  </BrowserRouter>

//  {showBackToTop && (
//         <button
//           className="fixed bottom-4 right-4 p-2 shadow cursor-pointer backToTop"
//           onClick={handleBackToTop}
//         >
//           <BsArrowUp />

//         </button>
//       )}

//     </>

//   );
// }

// export default App

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import Tweets from "./pages/Blogs";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { BsArrowUp } from "react-icons/bs";
import Project from "./pages/Project";
import Playground from "./pages/Playground";
import   Experience from "./pages/Experience";

import MouseFollower from "mouse-follower";

import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <BrowserRouter>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="relative z-0 bg-primary">
                  <div className=" bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <div className="relative z-0">
                      <Hero />
                      <StarsCanvas />
                    </div>
                  </div>
                  <Tech />
                  <About />
                  {/* <Experience /> */}

                  <Works />
                  <Feedbacks />
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            exact
            path="/project"
            element={
              <div className="proj_page relative bg-primary ">
                <Project />
                {/* <StarsCanvas /> */}
              </div>
            }
          />

          <Route exact path="/play" element={<Playground />} />
          <Route exact path="/Experience" element={
            <div className="bg-primary">

              <Experience />
            </div>
          } />

<Route exact path="/Gallery" element={
            <div className="bg-primary">

              <Gallery />
            </div>
          } />
        </Routes>
      </BrowserRouter>
      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2  cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;
