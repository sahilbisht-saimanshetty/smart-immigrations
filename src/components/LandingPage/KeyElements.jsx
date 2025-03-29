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
    { id: 1, title: "Fast-track to UK residency", description: "Helping exceptional talent fast-track their UK visa process with expert guidance.Helping exceptional talent fast-track their UK visa process with expert guidance." },
    { id: 2, title: "No job offer needed", description: "Helping exceptional talent fast-track their UK visa process with expert guidance.Helping exceptional talent fast-track their UK visa process with expert guidance." },
    { id: 3, title: "For tech, arts, and academic professionals", description: "Helping exceptional talent fast-track their UK visa process with expert guidance.Helping exceptional talent fast-track their UK visa process with expert guidance" },
    { id: 4, title: "For tech, arts, and academic professionals", description: "Helping exceptional talent fast-track their UK visa process with expert guidance.Helping exceptional talent fast-track their UK visa process with expert guidance." },
    { id: 5, title: "For tech, arts, and academic professionals", description: "Helping exceptional talent fast-track their UK visa process with expert guidance.Helping exceptional talent fast-track their UK visa process with expert guidance." },
    { id: 6, title: "For tech, arts, and academic professionals", description: "Helping exceptional talent fast-track their UK visa process with expert guidance.Helping exceptional talent fast-track their UK visa process with expert guidance." },
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
                <CommonHeading title="Key Elements" description="Helping exceptional talent fast-track their UK visa process with expert guidance." />
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