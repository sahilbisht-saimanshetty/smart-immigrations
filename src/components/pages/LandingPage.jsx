
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

const LandingPage = () => {
  const dispatch = useDispatch();
  const accepted = useSelector(state => state.disc.accepted);
  const showForm = useSelector((state) => state.form.showForm);
  return (
    <div>
      {
        showForm && <AssessmentModal onClose={() => dispatch(toggleForm())} />
      }
      <HeroPage />
      <AttorneySection />
      <KeyElementsCarousel />
      <div className="temp">
        <GoogleReviews />
        <GlobalTalentVisa />
      </div>
      <div className="temp2 pb-8">
        <WhySucceed />
        <SimpleSteps2 />
        <div className={`${accepted !== null && 'landingPageFooterWithoutDisc'}`}>
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;