import logo from "../../assests/smartImmigrantLogo.png"; // Ensure the path is correct
import CheckVisibilityBtn from "./CheckVisibilityBtn";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-center py-4 bg-transparent">
      <div className="flex items-center justify-between w-full  bg-white shadow-md md:px-2 lg:px-5 py-3 rounded-full">
        <div className="flex items-center md:gap-12 lg:gap-16">
          <img
            src={logo}
            alt="Smart Immigrant Logo"
            className="md:w-[100px] md:h-[30px] lg:w-[150px] lg:h-[50px]"
          />
       <ul className="hidden md:flex items-center md:gap-6 lg:gap-12 md:text-[14px] lg:text-[16px] text-[#2C2C2C] font-jakarta-sans font-medium">
          <li>
            <a href="/" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/service" className="hover:text-blue-600 transition">
              Service
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600 transition">
              Contact us
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
