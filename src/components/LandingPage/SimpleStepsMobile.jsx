import usaFlag from "../../assests/LandingPage/USAFLAG.png"
import React, { useEffect, useRef, useState } from "react";
import CommonHeading from "./commonHeading";
const SimpleStepsMobile = () => {

    const [count, setCount] = useState(1);
    const animationRef = useRef(null);
    const totalDuration = 10;


    useEffect(() => {
        const animElement = animationRef.current;
        if (!animElement) return;

        const handleRepeat = () => {
            setCount(prev => prev + 1);
        };


        animElement.addEventListener('repeatEvent', handleRepeat);
        animElement.addEventListener('endEvent', handleRepeat);

        return () => {
            animElement.removeEventListener('repeatEvent', handleRepeat);
            animElement.removeEventListener('endEvent', handleRepeat);
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
            description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate."
        },
        {
            x: 663.615156,
            y: 353.416036,
            title: "Build a Profile",
            description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate."
        },
        {
            x: 920.381156,
            y: 503.860036,
            title: "Gain Recognition",
            description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate."
        },
        {
            x: 1168.070658,
            y: 348.078666,
            title: "Attorney Collaboration",
            description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate."
        },
        {
            x: 1424.522931,
            y: 504.206521,
            title: "Approved",
            description: "Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate."
        }
    ];


    const pathSegments = [// Segment 2
        { d: "M 0.27 414.951 L 139.616 414.951", length: 125.886 },
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

    return (

        <div className="mx-6  rounded-md z-10 bg-white pt-16 pb-36 min-h-[100vh] simpleSteps">
            <CommonHeading
                title={"5 Simple Steps"}
                description="Helping exceptional talent fast-track their UK visa process with expert guidance."
            />

            <div className="relative scale-[2] mt-60 rotate-90" aria-label="Animated steps visualization">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-175 50 1368.287 550.75"
                    role="img"
                >

                    {/* Gray background path */}
                    <path
                        d="M 0.27 414.951 L 139.616 414.951 L 139.616 262.951 L 391.506 262.951 L 391.506 414.951 L 645.697 414.951 L 645.697 262.451 L 889.586 262.451 L 889.586 414.951 C 889.586 414.951 977.226 414.951 1031.73 414.951"
                        stroke="#D7D7D7"
                        strokeWidth="2"
                        fill="none"
                    />

                    <path
                        d="M 0.27 414.951 L 139.616 414.951 L 139.616 262.951 L 391.506 262.951 L 391.506 414.951 L 645.697 414.951 L 645.697 262.451 L 889.586 262.451 L 889.586 414.951 C 889.586 414.951 977.226 414.951 1031.73 414.951"
                        stroke="#004CA6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={totalPathLength}
                        strokeDashoffset={totalPathLength}
                    >
                        <animate
                            attributeName="stroke-dashoffset"
                            from={totalPathLength}
                            to="0"
                            begin="0s"
                            dur={`${totalDuration}s`}
                            repeatCount="indefinite"
                        />
                    </path>

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

                            path="M 0.27 414.951
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
                            begin="0s"
                            dur={`${totalDuration}s`}
                            repeatCount="indefinite"
                            keyPoints="0;0.071;0.143;0.357;0.5;0.714;0.857;0.929;1"
                            keyTimes="0;0.071;0.143;0.357;0.5;0.714;0.857;0.929;1"
                        />
                    </rect>

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
                                    dominantBaseline="middle"
                                    transform={`rotate(270, ${step.x - 402}, ${step.y - 87})`}

                                >
                                    {index + 1}
                                </text>
                            </g>
                            <foreignObject
                                x={index % 2 !== 0 ? step.x - 745 : step.x - 430}
                                y={index % 2 !== 0 ? step.y  : step.y }
                                width="212"
                                height="300"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                transform={`rotate(270, ${step.x - 508}, ${step.y - 57})`} 
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

                    {[{ x: 0, y: 322, showAt: 0 },
                    { x: 250, y: 170, showAt: 2.5 },
                    { x: 510, y: 320, showAt: 4.8 },
                    { x: 755, y: 165, showAt: 7.5 },
                    { x: 1015, y: 322, showAt: 9.9 }].map((point, index) => (
                        <image
                            key={index}
                            href={usaFlag}
                            x={point.x}
                            y={point.y}
                            width="70"
                            height="70"
                            opacity="0"
                            preserveAspectRatio="xMidYMid meet"
                            transform={index % 2 === 0 ?  `rotate(180, ${point.x + 12 }, ${point.y + 95})` : ''}
                        >
                            <animate
                                attributeName="opacity"
                                values="0;1;0"
                                keyTimes="0;0.5;1"
                                begin={`mainAnim.begin+${point.showAt + (count - 1) * 10}s`}
                                dur="0.5s"
                            />
                        </image>
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default React.memo(SimpleStepsMobile)