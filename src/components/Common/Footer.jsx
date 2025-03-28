import { FaLinkedinIn, FaYoutube} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import logo from "../../assests/smartImmigrantLogo.png";
import flag from "../../assests/flag.png"
import Disclaimer from "./Disclaimer";
import { useSelector } from "react-redux";

export default function Footer() {
  const accepted = useSelector(state => state.disc.accepted);
  return (
  <div className="">
    {
       accepted === null && <Disclaimer/>
    }
    <footer className="bg-white  shadow-md mx-8 relative top-[-20px] z-[100] rounded-md rounded-t-2xl py-4 px-4 md:py-12 md:px-28">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center md:justify-between items-start">
        <div className="flex flex-col md:gap-4 lg:gap-6 md:justify-center lg:justify-start font-jakarta-sans font-medium text-start">
          <img src={logo} alt="Smart Immigrant" className="h-[47px] w-[147px] mb-4" />
          <p className="text-[#2C2C2C] text-[16px]">
            2E/4, Block E2, Jhandewalan Extension,
            <br />
            Jhandewalan, New Delhi, Delhi 110055
          </p>
          <p className="text-[#2C2C2C] mt-2 text-[16px]">SiUk@gmail.com</p>
          <div className="flex items-center mt-2">
            <img src={flag} alt="UK Flag" className="h-4 w-6 mr-2" />
            <p className="text-[#2C2C2C] text-[16px]">+1 (650)-404–6152</p>
          </div>
        </div>

        {/* Middle Section (Subscribe) */}
        <div className="flex flex-col md:self-center lg:self-end h-full">
          <div className="flex flex-col flex-1 md:justify-center lg:justify-end">
            <div className="flex w-fit md:mt-8 lg:mt-6  h-[56px] md:w-[373px] p-2 rounded-md bg-[#F3F3F3]">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-transparent text-[#8D8D8D] font-medium font-jakarta-sans focus:outline-none focus:ring-0  focus:border-transparent flex-grow"
              />
              <button className="bg-[#1641F1] text-white text-center w-[89px] h-[44px] rounded-lg font-medium">
                Send
              </button>
            </div>

            <div className="flex justify-center md:justify-center lg:justify-end space-x-6 mt-4 text-[#8D8D8D] text-[32px]">
              <a href="#" className="hover:text-gray-800">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-gray-800">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-800">
                <RiInstagramFill />
              </a>
            </div>
          </div>
        </div>


        {/* Right Section (Links) */}

      </div>
      <div className="flex flex-col  md:flex-row font-jakarta-sans justify-center lg:justify-end space-x-6 text-black font-jakarta-sans font-medium  text-[16px] mt-8 border-t-2 border-[#D7D7D7] pt-6 md:pt-8">
        <a href="#" className="hover:text-gray-800">About us</a>
        <a href="#" className="hover:text-gray-800">Privacy Policy</a>
        <a href="#" className="hover:text-gray-800">Terms & Condition</a>
      </div>
    </footer>
  </div>

  );
}