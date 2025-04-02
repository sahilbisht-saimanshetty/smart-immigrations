import tower from "../../assests/LandingPage/tower.png";
import flag from "../../assests/LandingPage/landingPageFlag.png"
import { useDispatch } from "react-redux";
import { toggleForm } from "../../store/slices/formSlice";
const HeroPage = () => {
    const dispatch = useDispatch();
    return (
        <div id="heroPage" className="relative group md:pt-6 lg:pt-14 xl:pt-8 2xl:pt-14 4xl:pt-32 pb-10 md:pb-0 h-auto md:h-[70vh] lg:h-[90vh] xl:h-[110vh] mid-2xl:h-[80vh] 2xl:h-[105vh] 3xl:h-[80vh] 4xl:h-[110vh] 4xl:pb-40 overflow-hidden">
            <img
                src={flag}
                alt="Top Right Flag"
                className="absolute  top-0 right-0 md:right-[0px] w-[300px] h-[130px]  md:w-[400px] md:h-[150px] xl:w-[500px] xl:h-[230px] 2xl:w-[650px]  2xl:h-[300px] transition-transform duration-300 group-hover:scale-110  "
            />

            {/* Content Section */}
            <div className="flex justify-between px-4 md:px-8 lg:pe-24 lg:pt-16 lg:ps-20 lg:pe-12">
                <div className="pt-[120px]  md:pt-[150px] xl:pt-[100px] mid-2xl:pt-[130px]  lg:group-hover:scale-110 xl:group-hover:scale-105 2xl:group-hover:scale-110 group-hover:origin-left transition-transform duration-500 ease-in-out">
                    <div className="flex flex-col  justify-center lg:justify-start lg:items-start">
                        <h1 className="hidden lg:block  whitespace-pre-line text-center md:text-start font-extrabold font-jakarta-sans text-[28px] md:text-[48px] lg:text-[58px] xl:text-[48px] 2xl:text-[58px] leading-[120%] bg-gradient-to-r from-[#012169] to-[#041233] bg-clip-text text-transparent">
                            Unlock Your UK Global Talent {"\n"} Visa with AI Expertise
                        </h1>
                        <h1 className="block lg:hidden  whitespace-pre-line text-center lg:text-start font-extrabold font-jakarta-sans text-[28px] leading-[130%] md:text-[48px] lg:text-[64px] xl:text-[52px] 2xl:text-[64px] md:leading-[120%] bg-gradient-to-r from-[#012169] to-[#041233] bg-clip-text text-transparent">
                            Unlock Your {"\n"} UK Global Talent Visa {"\n"} with AI Expertise

                        </h1>
                    </div>
                    <div className=" text-[14px] md:text-[18px] lg:text-[20px] font-jakarta-sans text-center lg:text-start font-medium text-[#2C2C2C] mt-6">
                        <p>Streamline your visa journey with AI-driven guidance and expert support.</p>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-4 md:gap-2 flex-col md:flex-row md:justify-center lg:justify-start items-center h-auto md:h-[48px] lg:h-[56px] mt-10 xl:mt-12">
                        <button onClick ={() => dispatch(toggleForm())} className="relative text-[14px]  md:text-[12px] lg:text-[16px] w-[288px] h-[48px]  md:w-[200px] lg:w-[256px] lg:h-[56px]    text-center font-semibold lg:text-[#1641F1] text-white bg-[#1641F1] lg:bg-[#D9D9D9] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.5)]   rounded-full overflow-hidden group/button">
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

                        <button className="px-6 py-3 text-[14px] md:text-[12px] lg:text-[16px]  w-[288px] h-[48px] md:h-[48px] lg:h-[56px] md:w-[130px] lg:w-[166px] font-semibold text-[#1641F1] border border-[#E8ECFE] bg-[#FFFFFF33] backdrop-blur-2 hover:bg-[#1641F1] hover:border-[#1641F1] duration-300 ease-in-out hover:text-white rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="absolute hidden lg:block bottom-0 right-[80px] xl:right-[40px] mid-2xl:right-[80px] md:w-[200px] lg:w-[320px]  xl:w-[250px] 2xl:w-[320px] transition-transform duration-500 ease-in-out lg:group-hover:scale-110 xl:group-hover:scale-105 2xl:group-hover:scale-110">
                <img src={tower} className="w-full" alt="high tower" />
            </div>
        </div>
    );
};

export default HeroPage;
