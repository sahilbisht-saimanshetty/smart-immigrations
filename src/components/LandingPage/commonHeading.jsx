
const CommonHeading = ({ title, description }) => {

    return(<>
         <h2 className=" text-[20px] md:text-[36px] lg:text-[44px] leading-[35px] md:leading-[45px] lg:leading-[55px] whitespace-pre-line font-bold font-jakarta-sans text-[#2C2C2C]">{title}</h2>
            <p className="text-[12px] md:text-[18px] lg:text-[18px]  font-jakarta-sans whitespace-pre-line text-[#2C2C2C] font-medium mt-4">
                {description}
            </p>
    </>)
}

export default CommonHeading;