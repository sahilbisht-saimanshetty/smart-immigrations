import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiGeminiLine } from "react-icons/ri";
import CommonHeading from "./commonHeading";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import { useState, useEffect } from 'react';

const keyElements = [
    { 
        id: 1, 
        title: "Fast-Track Your UK Visa", 
        description: "Achieve quicker UK residency with expert guidance, designed to streamline the entire visa process for exceptional talent." 
    },
    { 
        id: 2, 
        title: "No Job Offer Required", 
        description: "Access the UK Global Talent Visa without needing a job offer—empowering you to take the next step based on your skills and potential." 
    },
    { 
        id: 3, 
        title: "Tailored for Tech, Arts, and Academia", 
        description: "Specifically crafted for professionals in the tech, arts, and academic fields, providing expert support to navigate the visa process efficiently." 
    },
    { 
        id: 4, 
        title: "AI-Powered Support", 
        description: "Leverage cutting-edge AI technology to receive personalized, data-driven insights and recommendations throughout your visa journey." 
    },
    { 
        id: 5, 
        title: "Dedicated Immigration Experts", 
        description: "Work with experienced immigration specialists who provide hands-on, professional advice, ensuring a smooth and stress-free application experience." 
    },
    { 
        id: 6, 
        title: "Simplified Application Process", 
        description: "Step-by-step guidance through the paperwork, documents, and requirements, making the entire application process seamless." 
    },
    { 
        id: 7, 
        title: "Increased Approval Rates", 
        description: "Benefit from a process designed to maximize your chances of success, with tailored strategies and support to meet UK immigration standards." 
    },
    { 
        id: 8, 
        title: "Long-Term Residency Pathways", 
        description: "Not just about getting a visa—our service helps position you for long-term opportunities and residency in the UK." 
    }
];


const KeyElementsCarousel = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);

    // Update button states whenever swiperInstance changes
    useEffect(() => {
        if (swiperInstance) {
            const updateButtons = () => {
                setIsEnd(swiperInstance.isEnd);
                setIsBeginning(swiperInstance.isBeginning);
            };
            
            swiperInstance.on('slideChange', updateButtons);
            swiperInstance.on('reachEnd', () => setIsEnd(true));
            swiperInstance.on('reachBeginning', () => setIsBeginning(true));
            
            return () => {
                swiperInstance.off('slideChange', updateButtons);
                swiperInstance.off('reachEnd');
                swiperInstance.off('reachBeginning');
            };
        }
    }, [swiperInstance]);

    return (
        <div className="w-full flex flex-col bg-[#eff8ff]   items-center pt-6 pb-12 md:pt-20 md:pb-24">
            <div className="mt-16 px-6 md:px-0 md:mt-10 lg:mt-16">
                <CommonHeading title={`Accelerate Your Path to UK Residency \n with Expert Visa Solutions`} description="AI-Enhanced Guidance and Tailored Support for Exceptional Talent in Tech, Arts, and Academia" />
            </div>

            <div className="relative w-[100%] mt-8 md:mt-16">
                <Swiper
                    modules={[Navigation, Mousewheel, FreeMode]}
                    slidesPerView={4}
                    spaceBetween={40}
                    onSwiper={setSwiperInstance}
                    mousewheel={{
                        forceToAxis: true,
                        sensitivity: 1,
                        releaseOnEdges: true,
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: true,
                        momentumBounce: false,
                        momentumRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: true, // Helps with edge detection
                    }}
                    speed={600}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.85}
                    watchSlidesProgress={true}
                    breakpoints={{
                        320: { slidesOffsetBefore: 60 , slidesPerView: 2 }, // Extra space on mobile
                        768: { slidesOffsetBefore: 80 , slidesPerView : 3}, // More space on tablet
                        1024: { slidesOffsetBefore: 120 }, // Even more on desktop
                    }}
                    className=""
                >
                    {keyElements.map((item) => (
                        <SwiperSlide key={item.id} className="w-[340px] md:p-2 lg:p-6 text-center">
                            <div className="flex justify-center">
                                <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] bg-[#1641F1] flex items-center justify-center rounded-full">
                                    <RiGeminiLine  className="text-white font-bold text-[20px] md:text-[30px] lg:text-[40px]" />
                                </div>
                            </div>
                            <h3 className="text-[#2C2C2C] font-medium font-jakarta-sans text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6">{item.title}</h3>    
                            <p className="text-[#8D8D8D] font-jakarta-sans font-medium text-[12px] md:text-[12px] lg:text-[14px] mt-1">{item.description}</p>    
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex gap-4 mt-12 py-1 px-2 bg-white  rounded-full">
                <button 
                    className={`prev-btn p-3 ${isBeginning ? 'text-gray-400 cursor-not-allowed' : 'text-[#1641F1] hover:bg-[#1641F1] hover:text-white'} rounded-full transition-colors`}
                    onClick={() => swiperInstance?.slidePrev()}
                    disabled={isBeginning}
                >
                    <FaChevronLeft className="h-4 w-4 md:w-5 md:h-5" />
                </button>
                <button 
                    className={`next-btn p-3 ${isEnd ? 'text-gray-400 cursor-not-allowed' : 'text-[#1641F1] hover:bg-[#1641F1] hover:text-white'} rounded-full transition-colors`}
                    onClick={() => !isEnd && swiperInstance?.slideNext()}
                    disabled={isEnd}
                >
                    <FaChevronRight className="h-4 w-4 md:w-5 md:h-5" />
                </button>
            </div>
        </div>
    );
};

export default KeyElementsCarousel;