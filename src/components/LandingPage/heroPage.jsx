import tower from "../../assests/LandingPage/tower.png";
import flag from "../../assests/LandingPage/landingPageFlag.png"
import { useDispatch } from "react-redux";
import { toggleForm } from "../../store/slices/formSlice";
const HeroPage = () => {
    const dispatch = useDispatch();
    return (
        <div className="relative group bg-gradient-to-b from-[rgba(200,16,46,0.294)] to-[rgba(37,60,123,0.354)] md:pt-8 lg:pt-16 pb-10 md:pb-0 h-auto md:h-[70vh] lg:h-[110vh] 3xl:h-[80vh] 4xl:h-[100vh] overflow-hidden">
            <img
                src={flag}
                alt="Top Right Image"
                className="absolute  top-0 right-0 w-[300px] h-[130px]  md:w-[400px] md:h-[150px] lg:w-[900px] lg:h-[300px] transition-transform duration-300 group-hover:scale-110 "
            />

            {/* Content Section */}
            <div className="flex justify-between px-4 md:px-8 md:pe-24 lg:pt-16 lg:ps-20 lg:pe-12">
                <div className="pt-[120px] md:pt-[150px] lg:group-hover:scale-110 lg:group-hover:origin-left transition-transform duration-500 ease-in-out">
                    <div className="flex flex-col text-[#012169] justify-start items-start">
                        <h1 className="whitespace-pre-line text-center md:text-start font-extrabold font-jakarta-sans text-[28px] md:text-[48px] lg:text-[64px] leading-[120%]">
                            Unlock Your Potential with {"\n"} the UK Global Talent Visa
                        </h1>
                    </div>
                    <div className=" text-[14px] md:text-[18px] lg:text-[20px] font-jakarta-sans text-center md:text-start font-medium text-[#2C2C2C] mt-6">
                        <p>Helping exceptional talent fast-track their UK visa process with expert guidance.</p>
                        <p>Helping exceptional talent fast-track their UK visa.</p>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-2 flex-col md:flex-row items-center h-auto md:h-[48px] lg:h-[56px] mt-10">
                        <button onClick ={() => dispatch(toggleForm())} className="relative text-[14px]  md:text-[12px] lg:text-[16px] w-[288px] h-[42px]  md:w-[200px] lg:w-[256px] lg:h-[56px]    text-center font-semibold lg:text-[#1641F1] text-white bg-[#1641F1] lg:bg-[#D9D9D9] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.5)]   rounded-full overflow-hidden group/button">
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

                        <button className="px-6 py-3 text-[14px] md:text-[12px] lg:text-[16px]  w-[288px] h-[42px] md:h-[48px] lg:h-[56px] md:w-[130px] lg:w-[166px] font-semibold text-[#1641F1] border border-[#E8ECFE] hover:bg-[#1641F1] hover:border-[#1641F1] duration-300 ease-in-out hover:text-white rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="absolute hidden md:block bottom-0 right-[80px] md:w-[200px] lg:w-[320px] transition-transform duration-500 ease-in-out group-hover:scale-110">
                <img src={tower} className="w-full" alt="high tower image" />
            </div>
        </div>
    );
};

export default HeroPage;
