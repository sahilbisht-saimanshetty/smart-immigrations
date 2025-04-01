import { useState, useEffect } from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import MobileNavbar from "../Common/MobileSideBar";
function RootLayout({ children }) {
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
    <div className="flex flex-col min-h-screen w-full">
      <div
        className={`fixed hidden md:block left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out ${
          isSticky ? "top-[-10px] w-full md:w-[95%] lg:w-[98%]" : "md:top-[15px]  2xl:top-[25px] w-[90%]"
        }`}
      >
        <Navbar />
      </div>
      <div className="block md:hidden">
           <MobileNavbar/>
      </div>
      <main className="flex-grow">{children}</main>
    </div>
  );
}

export default RootLayout;
