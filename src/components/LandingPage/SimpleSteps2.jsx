import usaFlag from "../../assests/LandingPage/USAFLAG.png";
import React, { useEffect, useRef, useState } from "react";
import CommonHeading from "./commonHeading";

const SimpleSteps2 = () => {
  const [count, setCount] = useState(1);
  const animationRef = useRef(null);
  const totalDuration = 13; // 10s movement + 5s pauses (1s at each of 5 steps)

  useEffect(() => {
    const animElement = animationRef.current;
    if (!animElement) return;

    const handleRepeat = () => {
      setCount((prev) => prev + 1);
    };

    animElement.addEventListener("repeatEvent", handleRepeat);
    animElement.addEventListener("endEvent", handleRepeat);

    return () => {
      animElement.removeEventListener("repeatEvent", handleRepeat);
      animElement.removeEventListener("endEvent", handleRepeat);
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
        setCount(prev => prev + 1);
    }, totalDuration * 1000);

    return () => clearInterval(interval);
}, [totalDuration]);

  const steps = [
    {
      x: 411.162156,
      y: 507.621036,
      title: "Spot Your Expertise",
      description: "We help you uncover the niche that best aligns with the Global Talent Visa criteria, ensuring you stand out as a top candidate."
    },
    {
      x: 663.615156,
      y: 353.416036,
      title: "Build a Profile",
      description: "We assist in structuring your portfolio—showcasing achievements, skills, and impact—to make your application compelling"
    },
    {
      x: 920.381156,
      y: 503.860036,
      title: "Gain Recognition",
      description: "Enhance your credibility through publications, media features, awards, and professional memberships to strengthen your case"
    },
    {
      x: 1168.070658,
      y: 348.078666,
      title: "Attorney Collaboration",
      description: "Work with top immigration attorneys to ensure your application is polished, legally sound, and ready for submission."
    },
    {
      x: 1424.522931,
      y: 504.206521,
      title: "Get Approved",
      description : "Submit your application with confidence and start your journey toward career growth and permanent residence in the UK."
    }
  ];

  const pathSegments = [
    { d: "M -175.77 338.951 L -112.27 338.951", length: 63.5 },
    { d: "M -112.27 338.951 L -112.27 414.951", length: 76 },
    { d: "M -112.27 414.951 L 139.616 414.951", length: 251.886 },
    { d: "M 139.616 414.951 L 139.616 262.951", length: 152 },
    { d: "M 139.616 262.951 L 391.506 262.951", length: 251.89 },
    { d: "M 391.506 262.951 L 391.506 414.951", length: 152 },
    { d: "M 391.506 414.951 L 645.697 414.951", length: 254.191 },
    { d: "M 645.697 414.951 L 645.697 262.451", length: 152.5 },
    { d: "M 645.697 262.451 L 889.586 262.451", length: 243.889 },
    { d: "M 889.586 262.451 L 889.586 414.951", length: 152.5 },
    { d: "M 889.586 414.951 C 889.586 414.951 977.226 414.951 1031.73 414.951", length: 142.144 }
  ];

  const totalPathLength = pathSegments.reduce((sum, segment) => sum + segment.length, 0);

  // Animation timing configuration
  const keyPoints = "0;0.14;0.14;0.36;0.36;0.57;0.57;0.78;0.78;1";
  const keyTimes = "0;0.133;0.2;0.333;0.4;0.533;0.63;0.75;0.86;1";

  return (
    <div className="md:mx-6 lg:mx-12 rounded-md z-10 bg-[white] overflow-hidden pt-42 md:min-h-[50vh] lg:min-h-[90vh] simpleSteps pb-10">
      <div className="mt-24">
        <CommonHeading
          title={"5 Simple Steps"}
          description="Helping exceptional talent fast-track their UK visa process with expert guidance."
        />
      </div>

      <div className="relative" aria-label="Animated steps visualization">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="-175 100 1368.287 550.75"
          role="img"
        >
          {/* Gray background path */}
          <path 
            d="M -175.77 338.951 L -112.27 338.951 L -112.27 414.951 L 139.616 414.951 L 139.616 262.951 L 391.506 262.951 L 391.506 414.951 L 645.697 414.951 L 645.697 262.451 L 889.586 262.451 L 889.586 414.951 C 889.586 414.951 977.226 414.951 1031.73 414.951" 
            stroke="#D7D7D7" 
            strokeWidth="2" 
            fill="none"
          />

          {/* Animated blue path */}
          <path 
            d="M -175.77 338.951 L -112.27 338.951 L -112.27 414.951 L 139.616 414.951 L 139.616 262.951 L 391.506 262.951 L 391.506 414.951 L 645.697 414.951 L 645.697 262.451 L 889.586 262.451 L 889.586 414.951 C 889.586 414.951 977.226 414.951 1031.73 414.951" 
            stroke="#004CA6" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray={totalPathLength}  
            strokeDashoffset={totalPathLength}
          >
            <animate 
              attributeName="stroke-dashoffset"
              dur={`${totalDuration}s`}
              repeatCount="indefinite"
              keyTimes={keyTimes}
              // const keyPoints = "0;0.14;0.14;0.36;0.36;0.57;0.57;0.78;0.78;1";
              values={`
                ${totalPathLength};
                ${totalPathLength * 0.86};
                ${totalPathLength * 0.86};
                ${totalPathLength * 0.64};
                ${totalPathLength * 0.64};
                ${totalPathLength * 0.43};
                ${totalPathLength * 0.43};
                ${totalPathLength * 0.22};
                ${totalPathLength * 0.22};
                0
              `}
              calcMode="linear"
            />
          </path>

          {/* Animated rectangle */}
          <rect 
            x="-6px" 
            y="-7px" 
            width="12.518" 
            height="12.518" 
            fill="#004CA6"
            transform="rotate(45)"
          >
            <animateMotion 
              id="mainAnim"
              ref={animationRef}
              path="M -175.77 338.951 L -112.27 338.951
                    L -112.27 414.951 
                    L 139.616 414.951 
                    L 139.616 262.951 
                    L 391.506 262.951 
                    L 391.506 414.951 
                    L 645.697 414.951 
                    L 645.697 262.451 
                    L 889.586 262.451 
                    L 889.586 414.951 
                    C 889.586 414.951 977.226 414.951 1031.73 414.951"
              calcMode="linear"
              dur={`${totalDuration}s`}
              repeatCount="indefinite"
              keyPoints={keyPoints}
              keyTimes={keyTimes}
            />
          </rect>

          {/* Step circles and text */}
          {steps.map((step, index) => (
            <g key={index}>
              <g z={100} className="custom-circle">
                <circle cx={step.x - 400} cy={step.y - 90} r="22" fill="#284083" />
                <circle cx={step.x - 400} cy={step.y - 90} r="16" fill="#C8102E" />
                <text
                  x={step.x - 400}
                  y={step.y - 85}
                  fontSize="18"
                  fill="white"
                  fontWeight="semi-bold"
                  textAnchor="middle"
                >
                  {index + 1}
                </text>
              </g>
              <foreignObject
                x={step.x - 505}
                y={step.y - 60}
                width="212"
                height="300"
              >
                <div className="text-center w-[212px]">
                  <h3 className={`font-bold text-[18px] font-jakarta-sans mb-2 text-[#007EE8]`}>
                    {step.title}
                  </h3>
                  <p className="text-[16px] font-normal text-[#8D8D8D] font-jakarta-sans leading-[24px]">
                    {step.description}
                  </p>
                </div>
              </foreignObject>
            </g>
          ))}

          {/* Flag animations */}
          {[
            { x: 0, y: 322, showAt: 1.72 },
            { x: 250, y: 170, showAt: 4.38 },
            { x: 510, y: 320, showAt: 7.01 },
            { x: 755, y: 165, showAt: 9.64 },
            { x: 1015, y: 322, showAt: 12.76 }
          ].map((point, index) => (
            <image 
              key={index}
              href={usaFlag}
              x={point.x}
              y={point.y}
              width="70"
              height="70"
              opacity="0"
              preserveAspectRatio="xMidYMid meet"
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                keyTimes="0;0.8;1"
                begin={`mainAnim.begin+${point.showAt + (count - 1) * totalDuration}s`}
                dur="1s"
              />
            </image>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default React.memo(SimpleSteps2);