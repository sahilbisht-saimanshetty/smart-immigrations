import { useEffect, useState } from "react";
import { toggleForm, setBasicDetails, setGeneralDetails, resetForm } from "../../store/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const AssessmentModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.form.showForm);
  const storedBasicDetails = useSelector((state) => state.form.basicDetails);
  const storedGeneralDetails = useSelector((state) => state.form.generalDetails);

  // Basic Details State
  const [basicDetails, setBasicDetailsState] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
  });

  // General Details State
  const [generalDetails, setGeneralDetailsState] = useState({
    purpose: {
      selectedOption: "",
      otherText: ""
    },
    fieldOfWork: {
      selectedField: "",
      otherField: ""
    },
    qualifications: {
      selectedQualify: [],
      qualifyText: ""
    },
    service: [],
    visaInfo: {
      visaApplied: "",
      visaStatus: ""
    },
    foundUs: "",
    consent: false
  });

  const [errors, setErrors] = useState({});

  // Initialize form with stored data
  useEffect(() => {
    if (storedBasicDetails) {
      setBasicDetailsState(storedBasicDetails);
    }
    if (storedGeneralDetails) {
      setGeneralDetailsState(storedGeneralDetails);
    }
  }, [storedBasicDetails, storedGeneralDetails]);

  const onClose = () => {
    dispatch(toggleForm());
  };

  const handleCheckboxChange = (value) => {
    setGeneralDetailsState(prev => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        selectedQualify: prev.qualifications.selectedQualify.includes(value) 
          ? prev.qualifications.selectedQualify.filter(item => item !== value) 
          : [...prev.qualifications.selectedQualify, value]
      }
    }));
  };

  const validate = () => {
    let newErrors = {};
    
    // Basic Details Validation
    if (!basicDetails.name) newErrors.name = "Name is required";
    if (!basicDetails.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(basicDetails.email)) {
      newErrors.email = "Invalid email format";
    }
    if (basicDetails.phone && !/^\d{10}$/.test(basicDetails.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // General Details Validation
    if (!generalDetails.purpose.selectedOption) newErrors.selectedOption = "This field is required";
    if (generalDetails.purpose.selectedOption === "other" && !generalDetails.purpose.otherText.trim()) {
      newErrors.otherText = "Please specify";
    }

    if (!generalDetails.fieldOfWork.selectedField) newErrors.selectedField = "This field is required";
    if (generalDetails.fieldOfWork.selectedField === "other" && !generalDetails.fieldOfWork.otherField.trim()) {
      newErrors.otherField = "Please specify your field";
    }

    if (generalDetails.qualifications.selectedQualify.length === 0) {
      newErrors.selectedQualify = "Please select at least one option";
    }

    if (generalDetails.service.length === 0) newErrors.service = "Please select service type";

    if (!generalDetails.visaInfo.visaApplied) newErrors.visaApplied = "This field is required";
    if (!generalDetails.visaInfo.visaStatus) newErrors.visaStatus = "This field is required";
    if (!generalDetails.foundUs) newErrors.foundUs = "This field is required";
    if (!generalDetails.consent) newErrors.consent = "You must provide consent";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBasicDetailsChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...basicDetails, [name]: value };
    setBasicDetailsState(updatedDetails);
    dispatch(setBasicDetails(updatedDetails));
  };

  const handleGeneralDetailsChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      const updatedService = checked
        ? [...generalDetails.service, value]
        : generalDetails.service.filter(s => s !== value);
      
      const updatedDetails = { ...generalDetails, service: updatedService };
      setGeneralDetailsState(updatedDetails);
      dispatch(setGeneralDetails(updatedDetails));
    } else {
      const updatedDetails = { ...generalDetails, [name]: value };
      setGeneralDetailsState(updatedDetails);
      dispatch(setGeneralDetails(updatedDetails));
    }
  };

  const handlePurposeChange = (e) => {
    const { value } = e.target;
    const updatedDetails = {
      ...generalDetails,
      purpose: {
        ...generalDetails.purpose,
        selectedOption: value
      }
    };
    setGeneralDetailsState(updatedDetails);
    dispatch(setGeneralDetails(updatedDetails));
  };

  const handleFieldOfWorkChange = (e) => {
    const { value } = e.target;
    const updatedDetails = {
      ...generalDetails,
      fieldOfWork: {
        ...generalDetails.fieldOfWork,
        selectedField: value
      }
    };
    setGeneralDetailsState(updatedDetails);
    dispatch(setGeneralDetails(updatedDetails));
  };

  const handleVisaAppliedChange = (value) => {
    const updatedDetails = {
      ...generalDetails,
      visaInfo: {
        ...generalDetails.visaInfo,
        visaApplied: value
      }
    };
    setGeneralDetailsState(updatedDetails);
    dispatch(setGeneralDetails(updatedDetails));
  };

  const handleVisaStatusChange = (e) => {
    const { value } = e.target;
    const updatedDetails = {
      ...generalDetails,
      visaInfo: {
        ...generalDetails.visaInfo,
        visaStatus: value
      }
    };
    setGeneralDetailsState(updatedDetails);
    dispatch(setGeneralDetails(updatedDetails));
  };

  const handleFoundUsChange = (e) => {
    const { value } = e.target;
    const updatedDetails = { ...generalDetails, foundUs: value };
    setGeneralDetailsState(updatedDetails);
    dispatch(setGeneralDetails(updatedDetails));
  };

  const handleConsentChange = () => {
    const updatedDetails = { ...generalDetails, consent: !generalDetails.consent };
    setGeneralDetailsState(updatedDetails);
    dispatch(setGeneralDetails(updatedDetails));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      // Reset form
      setBasicDetailsState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
      });
      setGeneralDetailsState({
        purpose: {
          selectedOption: "",
          otherText: ""
        },
        fieldOfWork: {
          selectedField: "",
          otherField: ""
        },
        qualifications: {
          selectedQualify: [],
          qualifyText: ""
        },
        service: [],
        visaInfo: {
          visaApplied: "",
          visaStatus: ""
        },
        foundUs: "",
        consent: false
      });
      dispatch(resetForm());
      onClose();
    }
  };

  const checkBoxName = [
    { 
      title: "Full-Service (Human-Led, Fully Managed)", 
      subtext: "Our team manually handles every detail, crafting and managing your profile personally." 
    },
    { 
      title: "Collaborative Service (50-50 Partnership)", 
      subtext: "Tasks and responsibilities are equally divided; our team collaborates closely with you." 
    },
    { 
      title: "AI-Assisted Self-Service (Tools Provided, You Execute)", 
      subtext: "You perform tasks independently, using AI-powered tools we provide." 
    },
    { 
      title: "Self-Guided (Courses & Resources Only)", 
      subtext: "You do everything independently, guided only by provided courses and resources." 
    },
    { 
      title: "Automated Service (Fully AI-Driven)", 
      subtext: "An autopilot solution that automatically manages your profile after initial setup, with minimal ongoing input." 
    }
  ];

  return (
    <div className="fixed inset-0 bg-[#000000] bg-opacity-60 backdrop-blur-[15px] flex items-center flex-col justify-center h-[100vh] w-[100vw] z-[1000]" onClick={onClose}>
      <div className="flex flex-col justify-center items-center rounded-lg w-[95%] h-[75%] md:h-[80%] lg:h-[95%]  md:w-[85%] lg:w-[55%] bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="relative text-right w-full">
          <button className="absolute top-[5px] right-[10px] text-[20px] md:text-[24px] text-gray-600 hover:scale-110 hover:text-black" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 md:px-12 py-4 h-[100%] overflow-auto [&::-webkit-scrollbar]:hidden scrollbar-none w-full">
          <div className="flex justify-center relative">
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] text-[#2C2C2C] font-jakarta-sans font-bold text-center mb-6">Please Fill the Details</h2>
          </div>
          <div className="space-y-8">
            <h2 className="text-[18px] md:text-[20px] lg:text-[24px] text-gray-600 font-jakarta-sans font-bold text-center mb-6">Basic Details</h2>

            {/* Name Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={basicDetails.name}
                onChange={handleBasicDetailsChange}
                className="w-full p-2 ps-6 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.name}</p>}
            </div>

            {/* Email and Phone Fields */}
            <div className="flex flex-col mb-2 md:flex-row justify-between w-full">
              <div className="text-left mb-2 md:mb-0 w-[100%] md:w-[45%]">
                <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={basicDetails.email}
                  onChange={handleBasicDetailsChange}
                  className="w-full p-2 ps-6 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.email}</p>}
              </div>
              <div className="text-left w-[100%] md:w-[45%]">
                <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={basicDetails.phone}
                  onChange={handleBasicDetailsChange}
                  className="w-full p-2 ps-6 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div className="mb-4 text-left">
              <label className="block text-[#2C2C2C] text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                placeholder="Eg. Alexa/ LinkedInprofile.com"
                value={basicDetails.linkedin}
                onChange={handleBasicDetailsChange}
                className="w-full p-2 ps-6 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <h2 className="text-[18px] md:text-[20px] lg:text-[24px] text-gray-600 font-jakarta-sans font-bold text-center mb-6">General Details</h2>

            {/* What brings you here Field */}
            <div className="text-left mb-2">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">What brings you here?</label>
              <div className="flex flex-col gap-4">
                <select
                  className="border p-2 w-full text-[#A4A4A4] bg-[#F6F6F6] rounded-md"
                  value={generalDetails.purpose.selectedOption}
                  onChange={handlePurposeChange}
                >
                  <option value="" disabled>Choose one</option>
                  <option value="qualify">I want to know if I qualify for the Global Talent Visa (GTV)</option>
                  <option value="build_profile">I'm interested in building my profile for GTV</option>
                  <option value="explore_immigration">I'm exploring UK immigration options</option>
                  <option value="other">Other (please specify)</option>
                </select>
                {generalDetails.purpose.selectedOption === "other" && (
                  <>
                    <input
                      type="text"
                      className="w-full p-2 ps-6 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please specify"
                      value={generalDetails.purpose.otherText}
                      onChange={(e) => {
                        const updatedDetails = {
                          ...generalDetails,
                          purpose: {
                            ...generalDetails.purpose,
                            otherText: e.target.value
                          }
                        };
                        setGeneralDetailsState(updatedDetails);
                        dispatch(setGeneralDetails(updatedDetails));
                      }}
                    />
                  </>
                )}
              </div>
              {errors.otherText && <p className="text-red-500 font-dm-sans ps-2 pt-2 text-sm">{errors.otherText}</p>}
              {errors.selectedOption && <p className="text-red-500 font-dm-sans ps-2 pt-2 text-sm">{errors.selectedOption}</p>}
            </div>
            {/* Field of work Field */}
            <div className="text-left mb-2">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Which area best represents your field of work?</label>
              <div className="flex flex-col gap-4">
                <select
                  className="border p-2 rounded-md w-full text-[#A4A4A4] bg-[#F6F6F6]"
                  value={generalDetails.fieldOfWork.selectedField}
                  onChange={handleFieldOfWorkChange}
                >
                  <option value="" disabled>Choose the closest one</option>
                  <option value="tech">Tech (AI, Software, Cybersecurity, etc.)</option>
                  <option value="academia">Academia & Research</option>
                  <option value="arts">Arts & Culture</option>
                  <option value="other">Other (please write in your field)</option>
                </select>
                {generalDetails.fieldOfWork.selectedField === "other" && (
                  <>
                    <input
                      type="text"
                      className="w-full p-2 ps-6 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please specify your field"
                      value={generalDetails.fieldOfWork.otherField}
                      onChange={(e) => {
                        const updatedDetails = {
                          ...generalDetails,
                          fieldOfWork: {
                            ...generalDetails.fieldOfWork,
                            otherField: e.target.value
                          }
                        };
                        setGeneralDetailsState(updatedDetails);
                        dispatch(setGeneralDetails(updatedDetails));
                      }}
                    />
                  </>
                )}
              </div>
              {errors.selectedField && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.selectedField}</p>}
              {errors.otherField && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.otherField}</p>}

            </div>

            {/* Qualifications Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Do you already have any of the following? (Select all that apply)</label>
              <div className="flex flex-col gap-2">
                {[
                  "Publications (Research papers, articles, etc.)",
                  "Awards or Recognitions",
                  "Media Mentions or Interviews",
                  "Patents",
                  "Strong Industry Leadership Experience",
                  "Not yet, but I want to work on this",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#2C2C2C]">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mr-2"
                      checked={generalDetails.qualifications.selectedQualify.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    <span className="text-[#2C2C2C] md:text-[16px] font-dm-sans">{item}</span>
                  </label>
                ))}
              </div>
              {errors.selectedQualify && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.selectedQualify}</p>}
              <input
                type="text"
                className="w-full p-2 ps-6 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                placeholder="Add more details on why you qualify"
                value={generalDetails.qualifications.qualifyText}
                onChange={(e) => {
                  const updatedDetails = {
                    ...generalDetails,
                    qualifications: {
                      ...generalDetails.qualifications,
                      qualifyText: e.target.value
                    }
                  };
                  setGeneralDetailsState(updatedDetails);
                  dispatch(setGeneralDetails(updatedDetails));
                }}
              />
            </div>

            {/* Service Type Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Types of service</label>
              <div className="flex flex-col gap-4">
                {checkBoxName?.map((item, index) => (
                  <label key={index} className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="service"
                      value={item.title}
                      checked={generalDetails.service.includes(item.title)}
                      onChange={handleGeneralDetailsChange}
                      className="mr-2 p-2 w-4 h-4 border-[#007EE8]"
                    />
                    <div>
                      <span className="text-[#2C2C2C] text-[12px] md:text-[16px] font-dm-sans">{item.title}</span>
                      <p className="text-[#8D8D8D] text-[10px] md:text-[14px]">{item.subtext}</p> 
                    </div>
                  </label>
                ))}
              </div>
              {errors.service && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.service}</p>}
            </div>

            {/* Visa Applied Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Have you applied for the Global Talent Visa before?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="visaApplied"
                    className='w-4 h-4 mr-2'
                    value="yes"
                    checked={generalDetails.visaInfo.visaApplied === "yes"}
                    onChange={() => handleVisaAppliedChange("yes")}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="visaApplied"
                    className='w-4 h-4 mr-2'
                    value="no"
                    checked={generalDetails.visaInfo.visaApplied === "no"}
                    onChange={() => handleVisaAppliedChange("no")}
                  />
                  No
                </label>
              </div>
              {errors.visaApplied && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.visaApplied}</p>}
            </div>

            {/* Visa Status Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">What visa status are you currently on, and how much time do you have left?</label>
              <input
                type="text"
                className="w-full p-2 ps-6 text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your visa status and time left"
                value={generalDetails.visaInfo.visaStatus}
                onChange={handleVisaStatusChange}
              />
              {errors.visaStatus && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.visaStatus}</p>}
            </div>

            {/* How Found Us Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">How did you find us?</label>
              <select
                className="border p-2 rounded-md w-full text-[#A4A4A4] bg-[#F6F6F6]"
                value={generalDetails.foundUs}
                onChange={handleFoundUsChange}
              >
                <option value="" disabled>Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="referral">Referral</option>
                <option value="google">Google Search</option>
                <option value="other">Other</option>
              </select>
              {errors.foundUs && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.foundUs}</p>}
            </div>

            {/* Consent Field */}
            <div className="mb-2 text-left">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className='w-4 h-4 mr-2'
                  checked={generalDetails.consent}
                  onChange={handleConsentChange}
                />
                <span className="text-[12px] md:text-[16px] font-normal font-dm-sans text-[#2C2C2C]">
                  I agree to receive updates and guidance from Smart Immigrant.UK.
                </span>
              </label>
              {errors.consent && <p className="text-red-500 font-dm-sans   ps-2 pt-2 text-sm">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit font-dm-sans bg-[#1641F1] text-white py-2 px-6 rounded-full hover:scale-110 transition"
            >
              Check your eligibility
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssessmentModal;