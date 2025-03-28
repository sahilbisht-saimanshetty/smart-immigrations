import React, { useEffect, useRef } from "react";
import { accept , reject } from "../../store/slices/DiscSlice";
import { useDispatch , useSelector } from "react-redux";
const Disclaimer = () => {
    const dispatch = useDispatch();
    const disclaimerRef = useRef(null);
    const accepted = useSelector(state => state.disc.accepted)
    const scrollToDisclaimer = () => {
        disclaimerRef.current?.scrollIntoView({ behavior: "smooth" });
      };

      useEffect(() => {
        if(accepted === null){
            scrollToDisclaimer();
        }
      } , [])

    
  return (
    <div ref={disclaimerRef} className="bg-[#007EE8] font-jakarta-sans text-white p-6  flex flex-col md:flex-row justify-between items-center   py-4 px-4 md:py-12 md:px-20">
      {/* Left Section: Title & Text */}
      <div className="text-left">
        <h2 className="text-xl md:text-2xl font-jakarta-sans font-bold mb-4">Disclaimer</h2>
        <p className="text-sm md:text-[18px] font-medium font-jakarta-sans leading-[140%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-col gap-3 mt-4 w-[107px] text-center">
        <button onClick={() => dispatch(accept())} className="bg-white text-blue-600 h-[48px] font-medium px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
          Accept
        </button>
        <button onClick={() => dispatch(reject())} className="border border-white h-[48px] text-white font-medium px-5 py-2 rounded-full hover:bg-white hover:text-blue-600 transition">
          Decline
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
