import React from "react";
import CommonHeading from "./commonHeading";
import CheckVisibilityBtn from "../Common/CheckVisibilityBtn";


const cardData = [
    {
        title: "What is the Global Talent Visa?",
        description: `         Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance. `,
        reverse: false
    },
    {
        title: "Who is eligible?",
        description: `         Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance. `,
        reverse: true
    },
    {
        title: "Why choose this route?",
        description: `         Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance.
                                Helping exceptional talent fast-track their UK visa process with expert guidance. `,
        reverse: false
    }
]
const GlobalTalentVisa = () => {


    const ContentCard = ({ title, description, reverse = false }) => {

        return (<>
            <div className={`flex justify-between items-center gap-6 ${reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'}`}>
                <div className="text-center px-6 md:px-0 md:text-left w-fit md:w-[533px]">
                    <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold font-jakarta-sans text-[#1641F1]">{title}</h3>
                    <p className="text-[#8D8D8D] text-center font-jakarta-sans font-medium text-[14px] md:text-[12px] md:leading-[18px]  lg:text-[16px] lg:leading-[24px] mt-2 md:text-left">
                        {description}
                    </p>
                </div>
                {
                    reverse ? <div className="bg-white p-6 shadow-xl min-w-[320px] h-[200px] md:w-[350px] md:h-[200px] lg:w-[403px] lg:h-[261px] rounded-lg relative">
                        <div className="absolute inset-0 rounded-xl border-b-4 md:border-r-4  border-[#E52D37]"></div>
                        <div className="absolute inset-0 rounded-xl shadow-[0px_4px_0px_0px_#294286]  md:shadow-[4px_0px_0px_0px_#294286]"></div>
                    </div> : <div className="bg-white p-6 shadow-xl  min-w-[320px] h-[200px] md:w-[350px] md:h-[200px]  lg:w-[403px] lg:h-[261px] rounded-lg relative">
                        <div className="absolute inset-0 rounded-xl border-b-4 md:border-l-4  border-[#E52D37]"></div>
                        <div className="absolute inset-0 rounded-xl shadow-[0px_4px_0px_0px_#294286] md:shadow-[-4px_0px_0px_0px_#294286]"></div>
                    </div>
                }

            </div>
        </>)
    }


    return (
        <div className="flex justify-center items-center min-h-screen  px-6 md:px-6 lg:px-12">
            <div className=" w-full bg-white relative top-[-50px] shadow-lg rounded-xl py-16 px-2 md:px-6 lg:px-24 text-center">
                <div>
                    <CommonHeading title={"About the Global Talent Visa"} description={"Helping exceptional talent fast-track their UK visa process with expert guidance."} />
                </div>

                <div className="mt-8">
                <CheckVisibilityBtn/>
                </div>

                <div className="mt-10 md:mt-10 mb-4 md:mb-10 px-4 lg:px-8 lg:mt-24 flex flex-col gap-16">
                    {
                        cardData.map((card, index) => (
                            <ContentCard key={index} title={card.title} description={card.description} reverse={card.reverse} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default GlobalTalentVisa;
