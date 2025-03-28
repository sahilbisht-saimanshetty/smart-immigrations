
import HeroPage from "../LandingPage/heroPage";
import AttorneySection from "../LandingPage/AttorneySections";
import KeyElementsCarousel from "../LandingPage/KeyElements";
import GoogleReviews from "../LandingPage/GoogleReviews";
import GlobalTalentVisa from "../LandingPage/GlobalTalentVisa";
import WhySucceed from "../LandingPage/WhySucceed";
import SimpleSteps from "../LandingPage/SimpleSteps.jsx";
import {FAQ} from "../Common/FAQ.jsx"
import Footer from "../Common/Footer.jsx";
import SimpleSteps2 from "../LandingPage/SimpleSteps2.jsx";

const LandingPage = () => {
  return (
    <div>
         <HeroPage/>
         <AttorneySection/>
         <KeyElementsCarousel/>
         <div className="temp">
         <GoogleReviews/>
         <GlobalTalentVisa/>
         </div>

         <div className="temp2 pb-8">
         <WhySucceed/>
         <SimpleSteps2/>
         <FAQ/>
          <Footer/>
         </div>

    </div>
  );
}

export default LandingPage;