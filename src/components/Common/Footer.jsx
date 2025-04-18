import { FaLinkedinIn, FaYoutube} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import logo from "../../assests/smartImmigrantLogo.webp";
import flag from "../../assests/flag.png"
import Disclaimer from "./Disclaimer";
import { useSelector } from "react-redux";

export default function Footer() {

  const navigate = useNavigate();



  return (
  <div className="">
    <footer className="bg-white  shadow-md mx-8 relative   top-[-20px] z-[100] rounded-2xl md:rounded-2xl py-8 px-4  md:px-12 md:py-12 lg:py-12 lg:px-28">
      <div className="container mx-auto flex flex-col  lg:flex-row justify-center md:justify-between items-start">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 md:justify-center lg:justify-start font-jakarta-sans font-medium text-start">
          <img src={logo} alt="Smart Immigrant" className="h-[32px] w-[117px] md:h-[54px] md:w-[180px] mb-4" />
          <p className="text-[#2C2C2C] text-[12px] md:text-[16px]">
             254 Chapman Rd. STE 208
            <br />
            Newark , DE 19792
          </p>
          <p className="text-[#2C2C2C] mt-2 text-[12px] md:text-[16px]">Connectuk@smartimmigrant.com</p>
          <div className="flex items-center mt-2">
            {/* <img src={flag} alt="UK Flag" className="h-4 w-6 mr-2" /> */}
            <p className="text-[#2C2C2C] text-[12px] md:text-[16px]">+1 (650)-404–6152</p>
          </div>
        </div>

        {/* Middle Section (Subscribe) */}
        <div className="block md:hidden h-[1px] md:h-[2px] mt-4 w-full bg-[#D7D7D7]"></div>
        <div id="contactUs" className="flex flex-col self-center lg:self-end h-full">
          <div className="flex flex-col flex-1 justify-center lg:justify-end">
            {/* <div className="flex mt-4 md:mt-8  lg:mt-6  h-[40px] md:h-[56px] w-[265px] md:w-[373px] p-1 md:p-2 rounded-md bg-[#F3F3F3]">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-transparent text-[12px] md:text-base text-[#8D8D8D] font-medium font-jakarta-sans focus:outline-none focus:ring-0  focus:border-transparent flex-grow"
              />
              <button className="bg-[#1641F1] text-[12px] md:text-base text-white text-center w-[78px] h-[32px] md:w-[89px] md:h-[44px] rounded-lg font-medium">
                Send
              </button>
            </div> */}

            {/* <div className="flex justify-center md:justify-center lg:justify-end space-x-6 mt-6 md:mt-4 text-[#8D8D8D] text-[24px] md:text-[32px]">
              <a href="#" className="hover:text-gray-800">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-gray-800">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-800">
                <RiInstagramFill />
              </a>
            </div> */}
          </div>
        </div>


        {/* Right Section (Links) */}

      </div>
      <div className="flex flex-row font-jakarta-sans justify-center lg:justify-end space-x-6 text-black font-jakarta-sans font-medium text-[12px] md:text-[16px] mt-4 md:mt-8 md:border-t-2 md:border-[#D7D7D7] pt-2 md:pt-8">
        <a href="/uk/privacy-policy" target="_blank"  className="hover:text-gray-800 cursor-pointer hover:scale-105 transition-all">Privacy Policy</a>
        <a  href="/uk/terms-of-use" target="_blank" className="hover:text-gray-800 cursor-pointer hover:scale-105 transition-all">Terms Of Use</a>
      </div>
    </footer>
  </div>

  );
}