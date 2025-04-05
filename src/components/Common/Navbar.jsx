import logo from "../../assests/smartImmigrantLogo.webp"; // Ensure the path is correct
import CheckVisibilityBtn from "./CheckVisibilityBtn";
const Navbar = () => {

  const handleNavigateTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  return (
    <nav className="w-full flex justify-center py-4 bg-transparent">
      <div className="flex items-center justify-between w-full  bg-white shadow-md md:px-2 lg:px-4 py-3 rounded-full">
        <div className="flex items-center md:gap-12 lg:gap-16 p-2 ml-[20px]">
          <img
            src={logo}
            alt="Smart Immigrant Logo"
            className="md:w-[100px] md:h-[30px] lg:w-[125px] lg:h-[34px]"
          />
       <ul className="hidden md:flex items-center md:gap-3 lg:gap-12 md:text-[14px] lg:text-[16px] text-[#2C2C2C] font-jakarta-sans font-medium">
          <li>
            <a onClick={() => handleNavigateTo('heroPage')} className="hover:text-blue-600 transition cursor-pointer">
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
              Learn more
            </a>
          </li>
        </ul>
    </div>
         <CheckVisibilityBtn/>
      </div>
    </nav>
  );
};

export default Navbar;
