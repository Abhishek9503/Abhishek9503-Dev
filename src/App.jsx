import { BrowserRouter } from "react-router-dom";
import {About,Contact, Experience, Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import Tweets from "./components/Tweets";
// import PreLoader from "./components/PreLoader";
// import { RingLoader } from "react-spinners";
const  App=()=> {
  return (

    <>
    {/* <PreLoader/> */}


    <BrowserRouter>
 
 
 <div className="relative z-0 bg-primary">
   <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center"> 
   

     <Navbar/>
     <Hero/>
   </div>
   <About/>
   <Tweets/>
   <Experience/>
   <Tech/>
   <Works/>
   <Feedbacks/>

   <div className="realtive z-0">
     <Contact/>
     <StarsCanvas/>
   </div>


 </div>
 </BrowserRouter>
    </>

 
  );
}

export default App
