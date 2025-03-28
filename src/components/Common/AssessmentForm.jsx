import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const questions = [
    {
      id: 1,
      question: "Do you possess any awards recognizing your achievements or evidence of notable contributions within your field of expertise?",
      options: [
        "I hold federal or international awards, and/or I have authored inventions",
        "I hold federal or international awards, and/or I have authored inventions with widespread implementation.",
        "I hold federal or international awards, and/or I have authored inventions."
      ]
    },
    {
      id: 2,
      question: "What is your highest level of education?",
      options: ["Bachelor's degree", "Master's degree", "PhD or equivalent"]
    },
    {
      id: 3,
      question: "How many years of professional experience do you have in your field?",
      options: ["Less than 2 years", "2-5 years", "More than 5 years"]
    },
    {
      id: 4,
      question: "Have you published any research papers, books, or articles in recognized journals or media?",
      options: ["Yes, multiple publications", "Yes, but only a few", "No, not yet"]
    },
    {
      id: 5,
      question: "Are you currently employed in a leadership or managerial position?",
      options: ["Yes, at a senior level", "Yes, in a mid-level role", "No, but I have previous experience"]
    },
    {
      id: 6,
      question: "Have you made any significant contributions to the growth or success of a company, organization, or industry?",
      options: [
        "Yes, I have made notable contributions with measurable impact",
        "Yes, but my contributions were on a smaller scale",
        "Not yet, but I am working towards it"
      ]
    },
    {
      id: 7,
      question: "Have you received invitations to speak at conferences, panels, or industry events?",
      options: ["Yes, frequently", "Occasionally", "No, but I plan to in the future"]
    }
  ];
  

const ProgressBar = ({ currentStep, totalSteps }) => {
    return (
      <div className="flex items-center justify-center w-full my-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 
                ${index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500"}`}
            >
              <FaCheck size={12} />
            </div>
            {index !== totalSteps - 1 && (
              <div className="w-12 h-1 bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    );
  };

const AssessmentModal = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const totalSteps = 7;
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedOption !== null) {
      setStep(prev => prev + 1);
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedOption });
      setSelectedOption(null);
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentQuestion(prev => prev - 1);
    setSelectedOption(answers[questions[currentQuestion - 1]?.id] || null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-[100vh] w-[100vw] z-[1000]" onClick={onClose}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg shadow-xl w-[70%]  py-8 px-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-[32px] font-jakarata-sans font-bold text-[#2C2C2C] text-center">Start the Assessment</h1>
        <p className="text-[#2C2C2C] font-jakarata-sans text-[18px] font-medium text-center mt-2">Evaluate your profile by answering a few simple questions.</p>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mt-6 mb-6">
            <ProgressBar currentStep={step} totalSteps={totalSteps} />

        </div>

        {/* Question */}
        <motion.div key={currentQuestion} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
          <h3 className="text-lg font-jakarata-sans font-medium text-left  mb-4">Q{currentQuestion + 1}. {questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="flex items-center p-3 cursor-pointer transition-all duration-200 mb-2">
              <input
                type="radio"
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
                className="hidden"
              />
              <span className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${selectedOption === index ? 'border-blue-500' : 'border-gray-300'}`}>
                {selectedOption === index && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
              </span>
              <span className="ml-3 text-[16px] font-jakarata-sans text-[#202020]">{option}</span>
            </label>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`px-4 py-2 rounded-full text-white ${currentQuestion === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-700'}`}
          >
            Previous Question
          </button>
          <button
            onClick={handleNext}
            disabled={selectedOption === null || currentQuestion === questions.length - 1}
            className={`px-4 py-2 rounded-full text-white ${selectedOption === null || currentQuestion === questions.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#1641F1]'}`}
          >
            {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next Question'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AssessmentModal;
