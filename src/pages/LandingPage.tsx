import SectionOne from "../components/LandingPage/SectionOne";
import Navbar from "../layout/navbar";
import BackgroundImg from "../assets/background.jpg"
import SectionTwo from "../components/LandingPage/SectionTwo";
import SectionThree from "../components/LandingPage/SectionThree";
import SectionFour from "../components/LandingPage/SectionFour";
import SectionFive from "../components/LandingPage/SectionFive";
import SectionSix from "../components/LandingPage/SectionSix";
import Footer from "../layout/footer";

export default function LandingPage() {
  return (
      <div className="w-full ">
          <div className="min-h-[640px] relative  h-full  p-6 ">
              <Navbar />
              <SectionOne />
              <img src={BackgroundImg}  className="absolute object-cover contrast-90 brightness-40 top-0 left-0 w-full h-full z-[-1]" />
                  
             
              
          </div>

          <SectionTwo />
          <SectionThree />
          
          <SectionFour />

          <SectionFive />

      <SectionSix />
      

      <Footer />
    </div>
  )
}