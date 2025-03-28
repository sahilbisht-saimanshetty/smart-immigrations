import sgc from "../../assests/LandingPage/smart-green-card.png"
import proximity from "../../assests/LandingPage/proximity.png"
import chronicle from "../../assests/LandingPage/chroniclesPublisher.png"
import CommonHeading from "./commonHeading";
const attorneys = [
    {
      id: 1,
      logo: sgc,
      name: "Smart Green Card",
      firm: "Law Firm Name",
      description: "Helping exceptional talent fast-track their UK visa process with expert guidance."
    },
    {
      id: 2,
      logo: proximity,
      name: "Proximity",
      firm: "Law Firm Name",
      description: "Helping exceptional talent fast-track their UK visa process with expert guidance."
    },
    {
      id: 3,
      logo: chronicle,
      name: "Chronicle International",
      firm: "Law Firm Name",
      description: "Helping exceptional talent fast-track their UK visa process with expert guidance."
    }
  ];
  
  const AttorneyCard = ({ logo, name, firm, description }) => (
    <div className="flex flex-col items-center font-jakarta-sans text-center py-6 px-2 w-[271px]  rounded-xl">
      {/* Image with shadow effect */}
      <div className="relative h-[52px]  flex items-center justify-center">
        <img src={logo} alt={name} className="w-full h-full object-contain drop-shadow-md" />
      </div>

      <div className="mt-2">
      <div className="oval w-[116px] h-[20px]"></div>
      </div>

  
      <h3 className="text-[#1641F1] font-jakarta-sans text-[18px] font-medium  mt-4">{firm}</h3>
      <p className="text-[#8D8D8D] font-jakarta-sans font-medium text-[14px] leading-[20px] mt-2">{description}</p>
    </div>
  );
  
  const AttorneySection = () => {
    return (
      <section className=" bg-gradient-to-b from-[#DADDEA] to-[#E1E8F3] px-12">
        <div className="container rounded-md py-20 bg-white mx-auto text-center landingPageAttorneySection">
          <div>
             <CommonHeading title="Attorney Section" description="Helping exceptional talent fast-track their UK visa process with expert guidance." />
          </div>
  
          {/* Grid Layout */}
          <div className="flex  justify-center gap-12 mt-24">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.id} {...attorney} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AttorneySection;
  