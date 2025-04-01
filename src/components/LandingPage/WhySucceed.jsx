import { motion } from "framer-motion";
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
    <div className="relative w-full pb-16 md:pb-32 lg:pb-44 pt-10 md:pt-24 overflow-hidden">
      <div className="px-6 md:px-0">
        <CommonHeading
          title="Why You Will Succeed with Us"
          description="Helping exceptional talent fast-track their UK visa process with expert guidance."
        />
      </div>

      <div className="space-y-8 md:space-y-10 lg:space-y-20 mt-10 md:mt-10 lg:mt-24">
        {/* Top Marquee (Moves Left) */}
        <Marquee direction="left" items={strategies} speed={240} />

        {/* Bottom Marquee (Moves Right) */}
        <Marquee direction="right" items={strategies} speed={300} />
      </div>
    </div>
  );
};

const Marquee = ({ direction, items, speed }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items]; 

  return (
    <div className="relative w-full overflow-hidden">

      <motion.div
        className="flex w-max"
        animate={{
          x: direction === "right" ? ["0", "-100%"] : ["-80%", "0%"], // Adjust for both directions
        }}
        style={{
          transform: direction === "right" ? "translateX(100%)" : "translateX(0%)", // Set initial position for seamless loop
        }}
        transition={{
          ease: "linear",
          duration: speed, // Control speed of animation
          repeat: Infinity, // Infinite loop
        }}
      >
        {[...Array(3)].flatMap(() =>
          duplicatedItems.map((item, index) => (
            <div key={`${item}-${index}-${crypto.randomUUID()}`} className="marquee-item">
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
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};


export default WhySucceed;
