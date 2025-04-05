import React, { useEffect, useRef } from "react";
import { accept, reject } from "../../store/slices/DiscSlice";
import { useDispatch, useSelector } from "react-redux";
const Disclaimer = () => {
  const dispatch = useDispatch();
  const disclaimerRef = useRef(null);
  const accepted = useSelector(state => state.disc.accepted)
  // const scrollToDisclaimer = () => {
  //     disclaimerRef.current?.scrollIntoView({ behavior: "smooth" });
  //   };

  //   useEffect(() => {
  //     if(accepted === null){
  //         scrollToDisclaimer();
  //     }
  //   } , [])


  return (
    <div ref={disclaimerRef} className="bg-[#007EE8] font-jakarta-sans text-white   flex flex-col md:flex-row justify-between items-center   pt-4 pb-8 px-8 md:pb-8 md:pt-6 md:px-20">
      {/* Left Section: Title & Text */}
      <div className="text-left">
        <h2 className="md:text-[15px] text-[11px] font-jakarta-sans font-bold mb-2">Disclaimer</h2>
        <p className="text-[8px] md:text-[12px] pe-7 text-justify font-medium font-jakarta-sans leading-[140%]">

          Smart Immigrant UK provides informational and educational services, including AI-powered tools, to assist individuals in understanding the UK immigration process. We are not attorneys, do not provide legal representation, and do not act on behalf of any government agency, including UK immigration authorities. The information shared on our platform should not be considered legal advice.
         <br/>  While we strive to ensure the accuracy and relevance of our content, we make no guarantees regarding its completeness or reliability.Any reliance on AI-generated responses or other materials is at your own discretion.<br/>
          For personalized legal advice tailored to your situation, we strongly recommend consulting a licensed UK immigration solicitor. By proceeding, you acknowledge and accept this disclaimer

        </p>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-col gap-3 mt-4 w-[288px] md:w-[107px] text-center">
        <button onClick={() => dispatch(accept())} className="bg-white text-blue-600 text-[14px] h-[40px] px-5 py-2 font-medium w-full text-center  rounded-full shadow-md hover:bg-gray-100 transition">
          Accept
        </button>
        <button onClick={() => dispatch(reject())} className="border border-white h-[40px] text-[14px] px-5 py-2 text-white font-medium w-full text-center  rounded-full hover:bg-white hover:text-blue-600 transition">
          Decline
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
