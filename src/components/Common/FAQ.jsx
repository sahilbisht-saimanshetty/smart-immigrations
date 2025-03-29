import { useState } from "react";
import upArrow from "../../assests/up-arrow.png";
import downArrow from "../../assests/down-arrow.png";
import { AnimatePresence, motion } from "framer-motion";
import CommonHeading from "../LandingPage/commonHeading";
import { useSelector } from "react-redux";

const FAQData = [
  {
    id: 1,
    head: "Is Smart Green Card a scam?",
    content: (
      <div>
        No, Smart Green Card is a legitimate platform designed to streamline and
        simplify the <br className="lg:block hidden" /> immigration process. We
        provide verified information, expert guidance, and trusted attorney{" "}
        <br className="lg:block hidden" /> connections to help users navigate
        their journey with confidence.
      </div>
    ),
    videoUrl : 'https://www.youtube.com/embed/OFTc4g02yB8?autoplay=1&rel=0',
  },
  {
    id: 2,
    head: "Why is the pricing so high?",
    content: (
      <div>
        No, Smart Green Card is a legitimate platform designed to streamline and
        simplify the <br className="lg:block hidden" /> immigration process. We
        provide verified information, expert guidance, and trusted attorney{" "}
        <br className="lg:block hidden" /> connections to help users navigate
        their journey with confidence.
      </div>
    ),
    videoUrl : 'https://www.youtube.com/embed/OFTc4g02yB8?autoplay=1&rel=0',
  },
  {
    id: 3,
    head: "How does Smart Green Card ensure accuracy in evaluations?",
    content: (
      <div>
        No, Smart Green Card is a legitimate platform designed to streamline and
        simplify the <br className="lg:block hidden" /> immigration process. We
        provide verified information, expert guidance, and trusted attorney{" "}
        <br className="lg:block hidden" /> connections to help users navigate
        their journey with confidence.
      </div>
    ),
    videoUrl : 'https://www.youtube.com/embed/OFTc4g02yB8?autoplay=1&rel=0',
  },
  {
    id: 4,
    head: "Can Smart Green Card guarantee a Green Card approval?",
    content: (
      <div>
        No, Smart Green Card is a legitimate platform designed to streamline and
        simplify the <br className="lg:block hidden" /> immigration process. We
        provide verified information, expert guidance, and trusted attorney{" "}
        <br className="lg:block hidden" /> connections to help users navigate
        their journey with confidence.
      </div>
    ),
    videoUrl : 'https://www.youtube.com/embed/OFTc4g02yB8?autoplay=1&rel=0',
  },
  {
    id: 5,
    head: "What makes Smart Green Card different from other immigration services?",
    content: (
      <div>
        No, Smart Green Card is a legitimate platform designed to streamline and
        simplify the <br className="lg:block hidden" /> immigration process. We
        provide verified information, expert guidance, and trusted attorney{" "}
        <br className="lg:block hidden" /> connections to help users navigate
        their journey with confidence.
      </div>
    ),
    videoUrl : 'https://www.youtube.com/embed/OFTc4g02yB8?autoplay=1&rel=0',
  },
];



export const YoutubeVideoContainer = ({ isOpen, setIsOpen, videoUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && videoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur-[2px] p-8 fixed inset-0 z-50 flex justify-center items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl w-[95%] md:w-fit  cursor-default relative overflow-hidden flex flex-col lg:flex-row gap-[60px] p-[4px]"
          >
            <iframe
              className="w-full h-[200px] md:w-[560px] md:h-[315px] lg:w-[800px] lg:h-[450px] rounded-xl"
              src={`${videoUrl}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



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
      setSelectedVideoUrl(videoUrl);
    }
  };

  return (
    <div className={`w-full pt-[54px] pb-20 md:pb-36 lg:pb-52 md:mt-10 lg:mt-24   ${accepted === null && 'landingPageFooter'} `}>
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
              className={`bg-white lg:w-[65%] w-[85%] mt-[30px] mx-[12px] flex justify-between items-center rounded-md lg:rounded-[14px]  pb-0 md:pb-3 relative lg:p-4   sm:border-b-[#E8E8E8] border-b-[1px] cursor-pointer ${openItemId === item.id ? "h-auto" : "md:min-h-[30px] lg:min-h-[56px]"
                }`}
            >
              <div className="flex flex-col justify-center lg:w-[85%] xs:w-[95%] w-full ">
                <div className=" flex w-full xs:text-[12px] text-[10px] md:text-[16px] lg:text-[18px]  font-medium h-auto text-[#2C2C2C]">
                  <div className="lg:w-full w-[90%] leading-[20px] font-semibold flex justify-center items-center md:leading-[24px] lg:leading-[30px] font-jakarta-sans">
                    {item.head}
                  </div>
                  <div
                    className="flex justify-center items-center h-[42px] w-[42px]  lg:hidden "
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
        <div className="text-[7px] xs:text-[8px] md:text-[12px] xs:leading-[14px] md:leading-[22px] lg:leading-[26px] lg:text-[18px] font-normal text-[#525252] p-2 mt-0 md:mt-[10px] font-jakarta-sans">
          {item.content}
          <p
            onClick={() => setIsOpen(true)}
            className="text-[#0048FF] text-[7px] md:text-[10px] lg:text-[16px] underline font-semibold font-dm-sans"
          >
            Learn More
          </p>
        </div>
      </motion.div>
              </div>
              <div
                className="lg:flex justify-center items-center h-[42px] w-[42px] hidden "
              >
                <img
                  className="h-[22px] w-[22px]"
                  src={openItemId === item.id ? upArrow : downArrow}
                  alt="Toggle arrow"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <YoutubeVideoContainer isOpen={isOpen} setIsOpen={setIsOpen} videoUrl={selectedVideoUrl} />
    </div>
  );
};
