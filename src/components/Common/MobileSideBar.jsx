import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../assests/smartImmigrantLogo.webp"; // Ensure the path is correct


const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigateTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="relative bg-white shadow-md p-4 flex justify-between items-center z-[1000]">
      <div className="text-blue-600 font-bold text-xl flex items-center">
        <img src={logo} alt="Smart Immigrant" className="h-8 mr-2" />
      </div>

      <button onClick={() => setIsOpen(true)} className="text-2xl">
        <AiOutlineMenu />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setIsOpen(false)}></div>
      )}

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5 z-50"
      >
        <button onClick={() => setIsOpen(false)} className="text-2xl absolute top-4 right-4">
          <AiOutlineClose />
        </button>

        <ul className="mt-10 space-y-4 text-lg font-medium">
        <li>
            <a href="/" className="hover:text-blue-600 transition cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigateTo('whyChooseUs')} className="hover:text-blue-600 transition cursor-pointer">
              Service
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigateTo('contactUs')} className="hover:text-blue-600 transition cursor-pointer">
              Contact us
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigateTo('learnMore')} className="hover:text-blue-600 transition cursor-pointer">
              Learn More
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNavbar;
