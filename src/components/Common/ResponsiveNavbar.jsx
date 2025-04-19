import MobileNavbar from "./MobileSideBar";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const ResponsiveNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 40);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <>
      <div className="w-full z-[900]">
        <div
          className={`fixed hidden md:block left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out ${
            isSticky
              ? "top-[-10px] w-full md:w-[95%] lg:w-[98%]"
              : "md:top-[15px]  2xl:top-[25px] w-[90%]"
          }`}
        >
          <Navbar />
        </div>
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
