import { useState } from "react";
import upArrow from "../../assests/up-arrow.png";
import downArrow from "../../assests/down-arrow.png";
import { AnimatePresence, motion } from "framer-motion";
import CommonHeading from "../LandingPage/commonHeading";
import { useSelector } from "react-redux";

const FAQData = [
  {
    id: 1,
    head: "Who is eligible for the UK Global Talent Visa?",
    content: "The UK Global Talent Visa is for individuals who have demonstrated exceptional talent or promise in fields like tech, academia, arts, and more. Eligibility is determined by endorsement from a recognized body.",
  },
  {
    id: 2,
    head: "How does Smart Immigrant UK help with my application?",
    content: "We provide end-to-end guidance, including personalized profile-building strategies, research paper and book publishing support, press outreach, awards and membership opportunities, final petition review, and discounted access to top UK-based partner attorneys who specialize in the Global Talent Visa.",
  },
  {
    id: 3,
    head: "What are the key criteria for a successful application?",
    content: "You must provide strong evidence showcasing your contributions, leadership, and recognition in your field, such as published work, media coverage, innovation, mentorship, and industry awards.",
  },
  {
    id: 4,
    head: "How long does it take to get the UK Global Talent Visa?",
    content: "The endorsement stage typically takes 4-8 weeks, while the visa processing time after endorsement is around 3-4 weeks. The exact timeline depends on your profile and documentation.",
  },
  {
    id: 5,
    head: "Do I need an attorney for my application?",
    content: "While it’s not mandatory, working with an immigration attorney can ensure your application meets all legal requirements. We offer pre-attorney evidence curation and discounts on legal services if you choose to go with our partner attorney.",
  },
  // {
  //   id: 6,
  //   head: "Can I apply without a job offer?",
  //   content: "Yes! The Global Talent Visa does not require a job offer. It allows you to live and work in the UK independently, giving you flexibility in your career.",
  // },
  // {
  //   id: 7,
  //   head: "What if my profile isn’t strong enough yet?",
  //   content: "Our team helps you build a compelling case by identifying gaps and strengthening your profile through publications, media recognition, and strategic evidence-building.",
  // },
  // {
  //   id: 8,
  //   head: "What makes Smart Immigrant UK different from other immigration services?",
  //   content: "We go beyond traditional visa consulting by actively helping you build your profile, connect with experts, and curate strong evidence to maximize your chances of success.",
  // },
  // {
  //   id: 9,
  //   head: "Does the visa lead to permanent residency in the UK?",
  //   content: "Yes! The Global Talent Visa is a pathway to UK settlement (Indefinite Leave to Remain) after 3 or 5 years, depending on your endorsement category.",
  // },
  // {
  //   id: 10,
  //   head: "How do I get started with Smart Immigrant UK?",
  //   content: "Simply book a consultation with us! Our team will assess your profile, provide recommendations, and guide you through the next steps.",
  // },
];




// export const YoutubeVideoContainer = ({ isOpen, setIsOpen, videoUrl }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && videoUrl && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsOpen(false)}
//           className="bg-slate-900/20 backdrop-blur-[2px] p-8 fixed inset-0 z-50 flex justify-center items-center overflow-y-scroll cursor-pointer"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0 }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white rounded-xl w-[95%] md:w-fit  cursor-default relative overflow-hidden flex flex-col lg:flex-row gap-[60px] p-[4px]"
//           >
//             <iframe
//               className="w-full h-[200px] md:w-[560px] md:h-[315px] lg:w-[800px] lg:h-[450px] rounded-xl"
//               src={`${videoUrl}?autoplay=1&rel=0`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };



export const FAQ = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const accepted = useSelector(state => state.disc.accepted);

  const toggleItem = (id, videoUrl) => {
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
      // setSelectedVideoUrl(videoUrl);
    }
  };

  return (
    <div className={`w-full pt-[54px]   md:mt-10 lg:mt-24   ${accepted === null ? 'landingPageFooter pb-20  md:pb-44' : 'pb-24 md:pb-52 '} `}>
      <div className="px-6 md:px-0">
        <CommonHeading title={"Frequently Asked Questions"} description={"Helping exceptional talent fast-track their UK visa process with expert guidance."} />
      </div>

      {/* FAQ Box */}
      <div className=" md:mt-8 lg:mt-16">
        {FAQData.map((item) => (
          <div key={item.id} className="w-full  flex justify-center">
            {/* Main Div */}
            <div
              onClick={() => toggleItem(item.id, item.videoUrl)}
              className={`bg-white lg:w-[55%] w-[85%] mt-[30px] mx-[12px] flex justify-between items-center rounded-md lg:rounded-[14px]  pb-0 md:pb-3 relative lg:p-4   sm:border-b-[#E8E8E8] border-b-[1px] cursor-pointer ${openItemId === item.id ? "h-auto" : "md:min-h-[30px] lg:min-h-[56px]"
                }`}
            >
              <div className="flex flex-col justify-center  w-full ">
                <div className=" flex w-full xs:text-[12px] text-[10px] md:text-[16px] lg:text-[18px]  font-medium h-auto text-[#2C2C2C]">
                  <div className="lg:w-full w-[90%] leading-[20px] font-semibold flex justify-start items-center text-left md:leading-[24px] lg:leading-[30px] px-4 font-jakarta-sans">
                    {item.head}
                  </div>
                  <div
                    className="flex justify-center items-center h-[42px] w-[42px]   "
                  >
                    <img
                      className="h-[12px] w-[12px] md:h-[22px] md:w-[22px]"
                      src={openItemId === item.id ? upArrow : downArrow}
                      alt="Toggle arrow"
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={openItemId === item.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="text-[7px] xs:text-[8px] md:text-[12px] xs:leading-[14px] md:leading-[22px] lg:leading-[26px] lg:text-[18px] px-4 me-6 font-normal text-[#525252]  text-justify break-all py-2 mt-0 md:mt-[10px] font-jakarta-sans">
                    {item.content}
                    {/* <p
            onClick={() => setIsOpen(true)}
            className="text-[#0048FF] text-[7px] md:text-[10px] lg:text-[16px] text-center underline font-semibold font-dm-sans"
          >
            Learn More
          </p> */}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        ))}
      </div>
      {/* <YoutubeVideoContainer isOpen={isOpen} setIsOpen={setIsOpen} videoUrl={selectedVideoUrl} /> */}
    </div>
  );
};
