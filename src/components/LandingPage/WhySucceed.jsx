import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CommonHeading from "./commonHeading";
import { RiGeminiLine } from "react-icons/ri";

const strategies = [
  "Personalized Strategy 1",
  "Personalized Strategy 2",
  "Personalized Strategy 3",
  "Personalized Strategy 4",
  "Personalized Strategy 5",
];

const WhySucceed = () => {

  return (
    <div className="relative w-full  py-10 overflow-hidden">
      <div className="px-6 md:px-0">
      <CommonHeading
        title="Why You Will Succeed with Us"
        description="Helping exceptional talent fast-track their UK visa process with expert guidance."
      />
      </div>


      <div className="space-y-8 md:space-y-10 lg:space-y-20 mt-8 md:mt-16 lg:mt-24">
        {/* Top Marquee (Moves Left) */}
        <MarqueeSwiper direction="left" items={strategies} />

        {/* Bottom Marquee (Moves Right) */}
        <MarqueeSwiper direction="right" items={strategies} />
      </div>
    </div>
  );
};

const MarqueeSwiper = ({ direction, items }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <Swiper
      spaceBetween={isMobile ? 20 : 48}
      slidesPerView="auto"
      loop={true}
      speed={5000} // Controls speed
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: direction === "right", // Reverse direction for bottom row
      }}
      modules={[Autoplay]}
      className="w-full"
    >
      {items.concat(items).map((item, index) => (
        <SwiperSlide key={index} className="!w-auto">
          <div
            className={`flex items-center flex-col justify-center gap-3 md:gap-3 lg:gap-6 px-2 md:px-4 lg:px-6 py-2 h-[100px] w-[106px] md:h-[150px] md:w-[160px] lg:w-[204px] lg:h-[192px] rounded-lg text-center font-semibold ${
              index % 2 === 0 ? "bg-blue-500 text-white" : "bg-white text-blue-600"
            }`}
          >
            <RiGeminiLine className="text-[30px] md:text-[48px] lg:text-[56px]" />
            <div className="font-jakarta-sans text-[10.42px] md:text-[16px] lg:text-[20px] leading-[100%] font-semibold">
              {item}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WhySucceed;
