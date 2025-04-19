import CommonHeading from "../LandingPage/commonHeading";
const PermanentDisclaimer = () => {
  return (
    <div className="text-left py-4 px-8  md:px-10 md:py-8 lg:py-6 lg:px-16">
         <h2 className=" text-[18px] md:text-[24px] lg:text-[32px] leading-[35px] md:leading-[45px] lg:leading-[55px] whitespace-pre-line font-bold font-jakarta-sans text-[#2C2C2C]">Disclaimer</h2>
         <p className="text-[14px] md:text-[16px] text-[#323232] font-dm-sans  text-justify font-medium leading-[140%]">
        Smart Immigrant UK provides informational and educational services,
        including AI-powered tools, to assist individuals in understanding the
        UK immigration process. We are not attorneys, do not provide legal
        representation, and do not act on behalf of any government agency,
        including UK immigration authorities. The information shared on our
        platform should not be considered legal advice.
        <br />
        While we strive to ensure the accuracy and relevance of our content, we
        make no guarantees regarding its completeness or reliability. Any
        reliance on AI-generated responses or other material is at your own
        discretion.
        <br />
        For personalized legal advice tailored to your situation, we strongly
        recommend consulting a licensed UK immigration solicitor. By proceeding,
        you acknowledge and accept this disclaimer.
      </p>
    </div>
  );
};
export default PermanentDisclaimer;
