import PrivacyPolicy from "../Common/PrivcayPolicy";
import logo from "../../assests/smartImmigrantLogo.webp"

const PrivacyPage = () => {
    return (<div className="bg-[#eff8ff] w-full">
         <div className="py-4 flex justify-start mx-6 md:mx-12 items-center">
         <img
            src={logo}
            alt="Smart Immigrant Logo"
            className="w-[180px] h-[50px]"
          />
         </div>
            <PrivacyPolicy>
            </PrivacyPolicy>
    </div>
    );
};

export default PrivacyPage;