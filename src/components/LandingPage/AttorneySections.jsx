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
    description: "Ward Hadaway LLP is a leading UK law firm with offices in Newcastle, Leeds, and Manchester, providing expert legal services in corporate, employment, healthcare, and public sectors, with a focus on client success and social responsibility."
  },
  {
    id: 2,
    logo: cranbook,
    firm: "Cranbrook Legal",
    description: "Cranbrook Legal is a dynamic UK immigration law firm with 25+ years of experience, specializing in both business and personal immigration matters. They offer tailored legal solutions, ensuring compassionate and professional guidance throughout the UK immigration process."
  },
  {
    id: 3,
    logo: jwm,
    firm: "JMW Solicitors LLP",
    description: "JMW Solicitors LLP is a top 100 UK law firm with offices in Manchester, Liverpool, and London. With over 45 years of experience, they provide expert legal services to businesses and individuals, focused on achieving positive outcomes through client-centered advice."
  },
  {
    id: 4,
    logo: sterling,
    firm: "Sterling Law",
    description: "Sterling Law is a London-based boutique firm specializing in personal and corporate immigration, with a focus on tech businesses. They offer tailored legal solutions in investment, data protection, and employment law, prioritizing efficiency and client satisfaction."
  }
];

  const AttorneyCard = ({ logo, firm, description }) => (
    <div className="flex flex-col self-center items-center font-jakarta-sans text-center md:py-2 h-full lg:py-6 px-2 w-[216px] md:w-[400px] lg:w-[300px]  rounded-xl">
      <div className="relative h-[36px] md:h-[52px]  flex items-center justify-center">
        <img src={logo} alt={firm} className="w-full h-full object-contain drop-shadow-md" />
      </div>

      <div className="mt-2">
      <div className="oval w-[80px] md:w-[116px] h-[20px]"></div>
      </div>

  
      <h3 className="text-[#1641F1] font-jakarta-sans text-[14px] md:text-[18px] font-medium  mt-4">{firm}</h3>
      <p className="text-[#8D8D8D] font-jakarta-sans font-medium text-[12px] md:text-[14px] leading-[20px] mt-2">{description}</p>
    </div>
  );
  
  const AttorneySection = () => {
    return (
      <section className="bg-[#eff8ff]  md:bg-[#ecf2fa] px-6 md:px-6 lg:px-12">
        <div className="container rounded-xl py-10 md:py-16 lg:py-20 bg-white mx-auto text-center overflow-hidden landingPageAttorneySection">
          <div className="px-6 mt-8 md:mt-0 md:px-0">
             <CommonHeading title="Attorney Section" description="Helping exceptional talent fast-track their UK visa process with expert guidance." />
          </div>
  
          {/* Grid Layout */}
          <div className="flex flex-col gap-12 flex-wrap  md:flex-row justify-center mt-10 md:gap-2 lg:gap-8 md:mt-10 lg:mt-24">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.id} {...attorney} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AttorneySection;
  