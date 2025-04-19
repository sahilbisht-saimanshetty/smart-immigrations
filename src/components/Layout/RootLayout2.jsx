import logo from "../../assests/smartImmigrantLogo.webp"

const RootLayout2 = ({ children }) => {
    return (<div className="bg-[#eff8ff] w-full pb-8">
         <div className="py-4 flex justify-start mx-6 md:mx-12 items-center">
         <img
            src={logo}
            alt="Smart Immigrant Logo"
            className="w-[180px] h-[50px]"
          />
         </div>
         <main className="flex-grow">{children}</main>
    </div>
    );
};

export default RootLayout2;