import React from "react";
import CommonHeading from "./commonHeading";
import CheckVisibilityBtn from "../Common/CheckVisibilityBtn";
import globalTalent from "../../assests/LandingPage/globalTalentVisa.jpg"
import eligble from "../../assests/LandingPage/ukTalentVisaElig.webp"
import ukVisa from "../../assests/LandingPage/uk-visa.webp"


const cardData = [
    {
        title: "What is the Global Talent Visa?",
        description: `The Global Talent Visa is an immigration route for highly skilled professionals who want to work in the UK. It’s ideal for individuals with a proven track record in their field, offering the freedom to work for any employer or as a self-employed professional. This route doesn’t require a job offer—your talent and achievements are enough to qualify`,
        reverse: false,
        imgSrc : globalTalent
    },
    {
        title: "Who is eligible?",
        description: `<div>
    <p>The Global Talent Visa is available to individuals who can demonstrate exceptional talent or promise in one of the following categories:</p>

    <ul style="list-style-type: disc;">
        <li><strong>Tech Innovators:</strong> Engineers, software developers, and digital technology experts.</li>
        <li><strong>World-Class Artists:</strong> Professionals in visual arts, performing arts, and creative industries.</li>
        <li><strong>Academic Leaders:</strong> Researchers, scientists, and academics who have made significant contributions to their field.</li>
    </ul>
    <br/>
    <p>If you meet the criteria, you can apply to live and work in the UK with the opportunity to eventually settle there.</p>
</div>
`,
        reverse: true,
        imgSrc : eligble
    },
    {
        title: "Why Choose the Global Talent Visa?",
         description : `
        <ul style="list-style-type: disc;">
          <li><strong>No Job Offer Required:</strong> You don’t need a specific job offer to apply, giving you the freedom to pursue opportunities across the UK.</li>
          <li><strong>Flexible Employment Options:</strong> Work for any employer, start your own business, or remain self-employed—your skills open doors to various career options.</li>
          <li><strong>Path to Permanent Residency:</strong> The Global Talent Visa offers a clear and straightforward route to indefinite leave to remain (ILR) in the UK, leading to permanent residency.</li>
          <li><strong>Global Recognition:</strong> The visa is designed to attract exceptional talent from around the world, enhancing your professional credibility and opening doors to global opportunities.</li>
          <li><strong>Fast-Track Processing:</strong> With our expert guidance and AI-powered insights, we ensure that your application process is as efficient and smooth as possible, giving you faster approval.</li>
        </ul>
      `,
        reverse: false,
        imgSrc:ukVisa
    }
]
const GlobalTalentVisa = () => {


    const subheading = "The UK Global Talent Visa provides a fast-tracked path to residency for exceptional individuals in tech, arts, and academia. \n With expert guidance, we help you navigate the application process and secure your future in the UK"


    const ContentCard = ({ title, description, reverse = false , imgSrc }) => {

        return (<>
            <div className={`flex justify-between items-center gap-6 ${reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'}`}>
                <div className="text-center px-4 md:px-0 md:text-left w-fit md:w-[533px] xl:w-[500px] 2xl:w-[533px]">
                    <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold font-jakarta-sans text-[#1641F1]">{title}</h3>
                    <p
                        className="text-[#8D8D8D]  text-justify font-jakarta-sans font-medium text-[14px] md:text-[12px] md:leading-[18px] lg:text-[16px] lg:leading-[24px] mt-2 "
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>

                </div>
                {
                    reverse ? <div className="bg-white  box-shadow-border min-w-[320px] h-[200px] md:w-[350px] md:h-[200px] lg:w-[403px] lg:h-[261px] rounded-lg relative">
                        <div className="absolute inset-0 rounded-xl border-b-4 md:border-r-4  border-[#E52D37]"></div>
                        <div className="absolute inset-0 rounded-xl shadow-[0px_4px_0px_0px_#294286]  md:shadow-[4px_0px_0px_0px_#294286]"></div>
                        <img src={imgSrc} className="h-full w-full  rounded-xl" />
                    </div> : <div className="bg-white  box-shadow-border  min-w-[320px] h-[200px] md:w-[350px] md:h-[200px]  lg:w-[403px] lg:h-[261px] rounded-lg relative">
                        <div className="absolute inset-0 rounded-xl border-b-4 md:border-l-4  border-[#E52D37]"></div>
                        <div className="absolute inset-0 rounded-xl shadow-[0px_4px_0px_0px_#294286] md:shadow-[-4px_0px_0px_0px_#294286]"></div>
                        <img src={imgSrc} className="h-full w-full  rounded-xl" />

                    </div>
                }

            </div>
        </>)
    }


    return (
        <div className="flex justify-center items-center min-h-screen  px-6 md:px-6 lg:px-12">
            <div className=" w-full bg-white relative top-[-50px] shadow-lg rounded-xl py-16 px-2 md:px-6 lg:px-24 text-center">
                <div>
                    <CommonHeading title={"About the Global Talent Visa"} description={subheading} />
                </div>

                <div className="mt-8">
                    <CheckVisibilityBtn />
                </div>

                <div className="mt-10 md:mt-10 mb-4 md:mb-10 px-4 xl:px-0 2xl:px-8 lg:mt-24 flex flex-col gap-16">
                    {
                        cardData.map((card, index) => (
                            <ContentCard key={index} title={card.title} description={card.description} reverse={card.reverse} imgSrc={card.imgSrc} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default GlobalTalentVisa;
