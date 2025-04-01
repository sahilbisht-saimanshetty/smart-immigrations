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
        <Marquee direction="left" items={strategies} speed={95} />

        {/* Bottom Marquee (Moves Right) */}
        <Marquee direction="right" items={strategies} speed={95} />
      </div>
    </div>
  );
};
const Marquee = ({ direction, items, speed }) => {
  const duplicatedItems = [...items, ...items, ...items]; // Ensure seamless looping

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{
          x: direction === "right" ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {/* Repeat multiple times to ensure continuous flow */}
        {[...Array(3)].flatMap(() =>
          duplicatedItems.map((item, index) => (
            <div key={index} className="marquee-item">
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
