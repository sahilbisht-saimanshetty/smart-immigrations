import CommonHeading from "./commonHeading";
import wardllp from "../../assests/LandingPage/Ward-Hadaway.png"
import cranbook from "../../assests/LandingPage/cranbookllp.png"
import jwm from "../../assests/LandingPage/jmwllp.png"
import sterling from "../../assests/LandingPage/sterlinglawllp.png"

const attorneys = [
  {
    id: 1,
    logo: wardllp,
    firm: "Ward Hadaway LLP",
    description : "Leading UK law firm in corporate, employment, healthcare, and public sector law."
  },
  {
    id: 2,
    logo: cranbook,
    firm: "Cranbrook Legal",
    description : "25+ years of expertise in business and personal immigration."
  },
  {
    id: 3,
    logo: jwm,
    firm: "JMW Solicitors LLP",
    description:"JMW is a top 100, full-service UK law firm with offices in Manchester, London, and Liverpool, offering legal services to businesses and individuals."
  },
  {
    id: 4,
    logo: sterling,
    firm: "Sterling Law",
    description: "London-based boutique firm specializing in immigration and tech law."
  }
];


  const AttorneyCard = ({ logo, firm, description }) => (
    <div className="flex flex-col self-center items-center font-jakarta-sans text-center md:py-2 h-full lg:py-6 px-2 w-[216px] md:w-[400px] xl:w-[250px] 2xl:w-[300px]  rounded-xl">
      <div className="relative h-[36px] md:h-[52px]  flex items-center justify-center">
        <img src={logo} alt={firm} className="w-full h-full object-contain drop-shadow-md" />
      </div>

      <div className="mt-2">
      <div className="oval w-[80px] md:w-[116px] h-[20px]"></div>
      </div>
      <h3 className="text-[#1641F1] font-jakarta-sans text-[14px] md:text-[18px] font-medium  mt-4">{firm}</h3>
      <p className="text-[#8D8D8D] font-jakarta-sans font-medium text-[12px] md:text-[14px] leading-[20px] mt-2 h-auto 2xl:h-[100px]">{description}</p>
    </div>
  );
  
  const AttorneySection = () => {
    return (
      <section className="bg-[#eff8ff]  md:bg-[#ecf2fa] px-6 md:px-6 lg:px-12">
        <div className="container rounded-xl py-10 md:py-16 lg:py-20 bg-white mx-auto text-center overflow-hidden landingPageAttorneySection">
          <div className="hidden md:block px-6 mt-8 md:mt-0 md:px-0">
             <CommonHeading title={"We work with top UK Immigration \n Lawyers"} description="Helping exceptional talent fast-track their UK visa process with expert guidance." />
          </div>
          <div className="block md:hidden px-6 mt-8 md:mt-0 md:px-0">
             <CommonHeading title={"We work with top UK Immigration Lawyers"} description="Helping exceptional talent fast-track their UK visa process with expert guidance." />
          </div>
  
          {/* Grid Layout */}
          <div className="flex flex-col gap-12 flex-wrap  md:flex-row justify-center mt-10 md:gap-2 lg:gap-8 xl:gap-4 2xl:gap-8 md:mt-10 lg:mt-24">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.id} {...attorney} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AttorneySection;
  