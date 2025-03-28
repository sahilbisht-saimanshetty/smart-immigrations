import tower from "../../assests/LandingPage/tower.png";
import flag from "../../assests/LandingPage/landingPageFlag.png"
const HeroPage = () => {
    return (
        <div className="relative group bg-gradient-to-b from-[rgba(200,16,46,0.294)] to-[rgba(37,60,123,0.354)] pt-16 h-[110vh] overflow-hidden">
            <img
                src={flag}
                alt="Top Right Image"
                className="absolute top-0 right-0 w-[900px] h-[300px] transition-transform duration-300 group-hover:scale-110 "
            />
            {/* Content Section */}
            <div className="flex justify-between pt-16 ps-20 pe-12">
                <div className="pt-[150px] group-hover:scale-110 group-hover:origin-left transition-transform duration-500 ease-in-out">
                    <div className="flex flex-col text-[#012169] justify-start items-start">
                        <h1 className="whitespace-pre-line  text-start font-extrabold font-jakarta-sans text-[64px] leading-[120%]">
                            Unlock Your Potential with {"\n"} the UK Global Talent Visa
                        </h1>
                    </div>
                    <div className="text-[20px] font-jakarta-sans flex flex-col items-start font-medium text-[#2C2C2C] mt-6">
                        <p>Helping exceptional talent fast-track their UK visa process with expert guidance.</p>
                        <p>Helping exceptional talent fast-track their UK visa.</p>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-2 items-center h-[56px] mt-10">
                        <button className="relative  text-[16px] w-[256px]   h-full text-center font-semibold text-[#1641F1] bg-[#D9D9D9] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.5)]   rounded-full overflow-hidden group/button">
                            <span className="absolute inset-[-3px] bg-[#1641F1] scale-x-0 origin-left skew-x-[20deg] transition-transform duration-300 ease-in-out group-hover/button:scale-x-100"></span>

                            <span className="relative block h-full w-full overflow-hidden">
                                <span className="relative  transition-transform w-full h-full flex justify-center items-center duration-300 ease-in-out group-hover/button:-translate-y-full">
                                    Check Your Eligibility
                                </span>
                                <span className="absolute left-0 h-full flex justify-center items-center w-full top-full transition-transform duration-300 ease-in-out   group-hover/button:-translate-y-full text-white">
                                    Check Your Eligibility
                                </span>
                            </span>
                        </button>

                        <button className="px-6 py-3 text-[16px] h-[56px] w-[166px] font-semibold text-[#1641F1] border border-[#E8ECFE] hover:bg-[#1641F1] hover:border-[#1641F1] duration-300 ease-in-out hover:text-white rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="absolute bottom-0 right-[80px] w-[320px] transition-transform duration-500 ease-in-out group-hover:scale-110">
                <img src={tower} className="w-full" alt="high tower image" />
            </div>
        </div>
    );
};

export default HeroPage;
