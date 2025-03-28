import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
          isSticky ? "top-[-10px] w-full md:w-[95%] lg:w-[98%]" : "top-[40px] w-[90%]"
        }`}
      >
        <Navbar />
      </div>
      <main className="flex-grow">{children}</main>
    </div>
  );
}

export default RootLayout;
