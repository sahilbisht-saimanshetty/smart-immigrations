import React, { useState, useRef, useEffect } from "react";
import CommonHeading from "./commonHeading";
import usaFlag from "../../assests/LandingPage/USAFLAG.png"

const StepProgressSVG = () => {
  const pathRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const animationDuration = 12; // seconds

  const [flag , setFlag ] = useState(true);

  const steps = [
    { number: 1, title: "Spot Your Expertise", description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate.", x: -55, y: 425, position: 0.12 },
    { number: 2, title: "Build a Profile", description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate.", x: 200, y: 270, position: 0.33 },
    { number: 3, title: "Gain Recognition", description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate.", x: 460, y: 425, position: 0.55 },
    { number: 4, title: "Attorney Collaboration", description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate.", x: 700, y: 270, position: 0.75 },
    { number: 5, title: "Approved", description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate.", x: 980, y: 425, position: 0.98 }
  ];

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  
  useEffect(() => {
    if (!pathLength) return;
  
    const path = pathRef.current;
    let animationId;
    let startTime;
  
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = (elapsed % animationDuration) / animationDuration;
      const distance = progress * pathLength;
  
      // Get current position of the dot
      const point = path.getPointAtLength(distance);
  
      let currentStepIndex = steps.findIndex(step => progress <= step.position);
          setActiveStep(currentStepIndex - 1);
          
  
      animationId = requestAnimationFrame(animate);
    };
  
    animationId = requestAnimationFrame(animate);
  
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [pathLength]);


  
  return (
    <div className="mx-12 rounded-md bg-white pt-24 min-h-[100vh] simpleSteps mt-20">
      <CommonHeading
        title={"5 Simple Steps"}
        description="Helping exceptional talent fast-track their UK visa process with expert guidance."
      />

      <div className="relative w-full max-w-screen-xl mt-10 overflow-hidden scale-[124%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-372.198 0 1589.455 686.099">
          {/* Gray background path */}
          <path
            d="M -218.85 317.074 L -155.35 317.074 L -155.35 393.074 L 96.543 393.074 L 96.543 241.074 L 348.433 241.074 L 348.433 393.074 L 602.624 393.074 L 602.624 240.574 L 846.513 240.574 L 846.513 393.074 C 846.513 393.074 934.153 393.074 988.653 393.074"
            stroke="#D7D7D7"
            strokeWidth="2"
            fill="none"
          />

          {/* Blue animated path */}
          <path
            ref={pathRef}
            d="M -218.85 317.074 L -155.35 317.074 L -155.35 393.074 L 96.543 393.074 L 96.543 241.074 L 348.433 241.074 L 348.433 393.074 L 602.624 393.074 L 602.624 240.574 L 846.513 240.574 L 846.513 393.074 C 846.513 393.074 934.153 393.074 988.653 393.074"
            stroke="#004CA6"
            strokeWidth="2"
            fill="none"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength}
          >
            <animate
              attributeName="stroke-dashoffset"
              from={pathLength}
              to="0"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </path>

          {/* Animated blue dot */}
          <circle r="10" fill="#004CA6">
            <animateMotion
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
              path="M -218.85 317.074 L -155.35 317.074 L -155.35 393.074 L 96.543 393.074 L 96.543 241.074 L 348.433 241.074 L 348.433 393.074 L 602.624 393.074 L 602.624 240.574 L 846.513 240.574 L 846.513 393.074 C 846.513 393.074 934.153 393.074 988.653 393.074"
            />
          </circle>
          {steps.map((step, index) => (
            <g key={index} className="custom-circle">
              {(index === activeStep && flag) && (
                <image
                  href={usaFlag}
                  x={step.x + 5}
                  y={step.y - 120} 
                  width="70"
                  height="70"
                />
              )}

              <circle cx={step.x + 20} cy={step.y - 30} r="22" fill="#284083" />
              <circle cx={step.x + 20} cy={step.y - 30} r="16" fill="#C8102E" />
              <text
                x={step.x + 20}
                y={step.y - 24}
                fontSize="18"
                fill="white"
                fontWeight="bold"
                textAnchor="middle"
              >
                {step.number}
              </text>
            </g>
          ))}


          {steps.map((step, index) => (
            <foreignObject
              key={index}
              x={step.x - 85}
              y={step.y + 10}
              width="212"
              height="200"
            >
              <div className="text-center w-[212px]">
                <h3 className={`font-bold text-[18px] font-jakarta-sans mb-3 text-[#007EE8]`}>
                  {step.title}
                </h3>
                <p className="text-[16px] font-normal text-[#8D8D8D] font-jakarta-sans leading-[24px]">
                  {step.description}
                </p>
              </div>
            </foreignObject>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default StepProgressSVG;