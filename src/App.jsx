import { BrowserRouter } from "react-router-dom";
import {About,Contact, Experience, Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import Tweets from "./components/Tweets";
import { useState, useEffect } from "react";
import CV from "./components/CV";
import Footer from "./components/Footer";
import { BsArrowUp } from 'react-icons/bs'
// import PreLoader from "./components/PreLoader";
// import { RingLoader } from "react-spinners";
const  App=()=> {

 
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > -0.1) {
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

    <>
    {/* <PreLoader/> */}


    <BrowserRouter>
 
 
 <div className="relative z-0 bg-black">
   <div className=" bg-black bg-cover bg-no-repeat bg-center"> 
   

     <Navbar/>
     <Hero/>
   </div>
   <About/>
   <Tweets/>
   <Experience/>
   <Tech/>
   <Works/>
   <Feedbacks/>

   <div className="relative z-0">
     <Contact/>
     <StarsCanvas/>
   </div>


  <Footer/>


 </div>
 </BrowserRouter>


 {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2 shadow cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
          
        </button>
      )}



    </>

 
  );
}

export default App
