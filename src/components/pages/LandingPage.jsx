
import HeroPage from "../LandingPage/heroPage";
import AttorneySection from "../LandingPage/AttorneySections";
import KeyElementsCarousel from "../LandingPage/KeyElements";
import GoogleReviews from "../LandingPage/GoogleReviews";
import GlobalTalentVisa from "../LandingPage/GlobalTalentVisa";
import WhySucceed from "../LandingPage/WhySucceed";
import SimpleSteps from "../LandingPage/SimpleSteps.jsx";
import { FAQ } from "../Common/FAQ.jsx"
import Footer from "../Common/Footer.jsx";
import SimpleSteps2 from "../LandingPage/SimpleSteps2.jsx";
import AssessmentModal from "../Common/AssessmentForm.jsx";
import { toggleForm } from "../../store/slices/formSlice.js";
import { useDispatch, useSelector } from "react-redux";
import SimpleStepsMobile from "../LandingPage/SimpleStepsMobile.jsx";
import Disclaimer from "../Common/Disclaimer.jsx";

const LandingPage = () => {
  const dispatch = useDispatch();
  const accepted = useSelector(state => state.disc.accepted);
  const showForm = useSelector((state) => state.form.showForm);
  return (
    <div>
      {
        accepted === null && <Disclaimer/>
      }
      {
        showForm && <AssessmentModal />
      }
      <div className="relative overflow-hidden">
        <div className="heroPageGradient"></div>
      <HeroPage />
      <AttorneySection />
      <KeyElementsCarousel />

      </div>
      <div className="relative overflow-hidden bg-[#eff8ff]">
        <div className="gradientLandingPageEclipse"></div>
        <GoogleReviews />
        <GlobalTalentVisa />
        <WhySucceed />
      </div>
      <div className="bg-[#eff8ff]">
        <div className="hidden md:block">
          <SimpleSteps2 />
        </div>
        <div className="block md:hidden">
          <SimpleStepsMobile />
        </div>
        <div className={`landingPageFooterWithoutDisc relative overflow-clip pb-6 md:pb-10`}>
          <div className="footerGradient"></div>
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;