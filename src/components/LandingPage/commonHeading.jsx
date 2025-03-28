
const CommonHeading = ({ title, description }) => {

    return(<>
         <h2 className="text-[44px] font-bold font-jakarta-sans text-[#2C2C2C]">{title}</h2>
            <p className="text-[18px]  font-jakarta-sans text-[#2C2C2C] font-medium mt-2">
                {description}
            </p>
    </>)
}

export default CommonHeading;