import { FaStar } from "react-icons/fa";
import CommonHeading from "./commonHeading";
import google from '../../assests/LandingPage/google.png'

const reviews = [
  {
    id: 1,
    name: "Sanjana Bisht",
    date: "6 days ago",
    review:
      "Great experience! The team was super helpful and guided me through every step of the process.",
  },
  {
    id: 2,
    name: "Rahul Yadav",
    date: "5 days ago",
    review:
      "Excellent service! Highly recommended for anyone looking to fast-track their UK visa process.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    date: "4 days ago",
    review:
      "Very professional and helpful. The process was smooth and easy to follow.",
  },
  {
    id: 4,
    name: "Siddharth Choudhary",
    date: "3 days ago",
    review:
      "I got my visa approval much faster than expected! Highly satisfied.",
  },
  {
    id: 5,
    name: "Ishita Malhotra",
    date: "2 days ago",
    review:
      "A seamless experience from start to finish. Thank you for the guidance!",
  },
  {
    id: 6,
    name: "Rohan Mehta",
    date: "1 day ago",
    review:
      "The support team was very responsive and cleared all my doubts. Great service!",
  },
];


const ReviewCard = ({ name, date, review }) => {
  return (
<div className="relative bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 max-w-[400px]">
  <div className="absolute inset-0 rounded-xl border-r-4 border-b-4 border-[#E52D37]"></div>
  <div className="absolute inset-0 rounded-xl shadow-[4px_4px_0px_0px_#294286]"></div>

  <div className="relative flex flex-col z-10 h-full">
    <div className="flex text-yellow-400 gap-2 mb-5">
      {[...Array(5)].map((_, i) => (
        <FaStar className="text-[10px] md:text-[14px" key={i} />
      ))}
    </div>

    <div className="flex flex-1 flex-col justify-between min-h-[156px] md:min-h-[110px]">
      <p className="text-[#2C2C2C] text-[10px] md:text-[14px] font-jakarta-sans font-normal leading-[20px] text-left">
        {review}
      </p>

      <div className="flex md:flex-row flex-col justify-between items-start md:items-center mt-auto">
        <span className="text-[#1641F1] text-[10px] md:text-[14px] font-jakarta-sans font-medium">{name}</span>
        <div className="flex items-center h-[20px] gap-2 text-gray-500">
          <p className="text-[10px] md:text-[14px] font-medium font-jakarta-sans m-0 text-[#8D8D8D] text-center">
            {date}
          </p>
          <img src={google} alt="google" className="w-[40px] md:w-[56px]" />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

const GoogleReviews = () => {
  return (
    <div className="w-full pt-6 pb-24 md:pt-12 relative h-auto md:pb-48   flex flex-col items-center googleReviewContainer">
      <div className="px-6 md:px-0">
         <CommonHeading title="Google Review" description="Helping exceptional talent fast-track their UK visa process with expert  guidance." />    
      </div>

      {/* Review Cards Grid */}
      <div className="mt-10 lg:mt-24 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-6 lg:px-16">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            date={review.date}
            review={review.review}
          />
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
