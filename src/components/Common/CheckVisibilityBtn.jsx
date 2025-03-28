import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../store/slices/formSlice";
const CheckVisibilityBtn = () => {
 const dispatch = useDispatch();

    return (
      <>
        <button onClick={() => dispatch(toggleForm())} className="relative text-[16px] w-[256px] h-[56px] text-center font-semibold text-[#E8ECFE] bg-[#1641F1] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.3)] rounded-full overflow-hidden group/button">
          <span className="absolute inset-[-3px] bg-[#E8ECFE] translate-x-full skew-x-[20deg] transition-transform duration-300 ease-in-out group-hover/button:translate-x-0"></span>
  
          <span className="relative block h-full w-full overflow-hidden">
            <span className="relative w-full h-full flex justify-center items-center transition-transform duration-300 ease-in-out group-hover/button:-translate-y-full">
              Check Your Eligibility
            </span>
              <span className="absolute left-0 top-full h-full w-full flex justify-center items-center transition-transform duration-300 ease-in-out group-hover/button:-translate-y-full text-[#1641F1]">
              Check Your Eligibility
            </span>
          </span>
        </button>
      </>
    );
  };
  
  export default CheckVisibilityBtn;
  