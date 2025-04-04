import { useEffect, useState } from "react";
import { toggleForm, setAnswersStore } from "../../store/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const AssessmentModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.form.showForm);
  const StoredAnswers = useSelector((state) => state.form.answers);
  const [selectedOption, setSelectedOption] = useState("");
  const [otherText, setOtherText] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [otherField, setOtherField] = useState("");
  const [selectedQualify, setSelectedQualify] = useState([]);
  const [qualifyText, setQualifyText] = useState("");
  const [visaApplied, setVisaApplied] = useState("");
  const [visaStatus, setVisaStatus] = useState("");
  const [foundUs, setFoundUs] = useState("");
  const [consent, setConsent] = useState(false);

  const onClose = () => {
    dispatch(toggleForm());
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    service: [],
  });
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (value) => {
    setSelectedQualify((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const validate = () => {
    let newErrors = {};
    // Name validation
    if (!formData.name) newErrors.name = "Name is required";

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // What brings you here validation
    if (!selectedOption) newErrors.selectedOption = "This field is required";
    if (selectedOption === "other" && !otherText.trim()) newErrors.otherText = "Please specify";

    // Field of work validation
    if (!selectedField) newErrors.selectedField = "This field is required";
    if (selectedField === "other" && !otherField.trim()) newErrors.otherField = "Please specify your field";

    // Qualifications validation
    if (selectedQualify.length === 0) newErrors.selectedQualify = "Please select at least one option";

    // Service type validation
    if (formData.service.length === 0) newErrors.service = "Please select at least one service type";

    // Visa applied validation
    if (!visaApplied) newErrors.visaApplied = "This field is required";

    // Visa status validation
    if (!visaStatus) newErrors.visaStatus = "This field is required";

    // How found us validation
    if (!foundUs) newErrors.foundUs = "This field is required";

    // Consent validation
    if (!consent) newErrors.consent = "You must provide consent";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedValue = {
        ...formData,
        service: checked
          ? [...formData.service, value]
          : formData.service.filter((s) => s !== value)
      }
      setFormData(updatedValue);
      dispatch(setAnswersStore({ data: updatedValue }))
    } else {
      setFormData({ ...formData, [name]: value });
      dispatch(setAnswersStore({ data: { ...formData, [name]: value } }))
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
    }
  };

  useEffect(() => {
    if (StoredAnswers) {
      setFormData(StoredAnswers)
    }
  }, [StoredAnswers])

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
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 ps-6    text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6]  rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.name}</p>}
            </div>

            {/* Email and Phone Fields */}
            <div className="flex flex-col mb-2 md:flex-row justify-between w-full">
              <div className="text-left mb-2 md:mb-0 w-[100%] md:w-[45%]">
                <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 ps-6    text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6]  rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.email}</p>}
              </div>
              <div className="text-left w-[100%] md:w-[45%]">
                <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 ps-6    text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6]  rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div className="mb-4 text-left">
              <label className="block text-[#2C2C2C] text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                placeholder="Eg. Alexa/ LinkedInprofile.com"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full p-2 ps-6   text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4]  bg-[#F6F6F6]  rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.linkedin && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.linkedin}</p>}
            </div>

            <h2 className="text-[18px] md:text-[20px] lg:text-[24px] text-gray-600 font-jakarta-sans font-bold text-center mb-6">General Details</h2>

            {/* What brings you here Field */}
            <div className="text-left mb-2">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">What brings you here?</label>
              <div className="flex flex-col gap-4">
                <select
                  className="border p-2 w-full    text-[#A4A4A4] bg-[#F6F6F6]  rounded-md  "
                  value={selectedOption}

                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="" disabled>Choose one</option>
                  <option value="qualify">I want to know if I qualify for the Global Talent Visa (GTV)</option>
                  <option value="build_profile">I'm interested in building my profile for GTV</option>
                  <option value="explore_immigration">I'm exploring UK immigration options</option>
                  <option value="other">Other (please specify)</option>
                </select>
                {errors.selectedOption && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.selectedOption}</p>}
                {selectedOption === "other" && (
                  <>
                    <input
                      type="text"
                      className="w-full p-2 ps-6    text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6]  rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please specify"
                      value={otherText}
                      onChange={(e) => setOtherText(e.target.value)}
                    />
                    {errors.otherText && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.otherText}</p>}
                  </>
                )}
              </div>
            </div>

            {/* Field of work Field */}
            <div className="text-left mb-2">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Which area best represents your field of work?</label>
              <div className="flex flex-col gap-4">
                <select
                  className="border p-2  rounded-md      w-full text-[#A4A4A4] bg-[#F6F6F6]"
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                >
                  <option value="" disabled>Choose the closest one</option>
                  <option value="tech">Tech (AI, Software, Cybersecurity, etc.)</option>
                  <option value="academia">Academia & Research</option>
                  <option value="arts">Arts & Culture</option>
                  <option value="other">Other (please write in your field)</option>
                </select>
                {errors.selectedField && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.selectedField}</p>}
                {selectedField === "other" && (
                  <>
                    <input
                      type="text"
                      className="w-full p-2 ps-6  ms-1text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6]  rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please specify your field"
                      value={otherField}
                      onChange={(e) => setOtherField(e.target.value)}
                    />
                    {errors.otherField && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.otherField}</p>}
                  </>
                )}
              </div>
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
                      className="w-4 h-4"
                      checked={selectedQualify.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
              {errors.selectedQualify && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.selectedQualify}</p>}
              <input
                type="text"
                className="w-full p-2 ps-6    text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6]  rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                placeholder="Add more details on why you qualify"
                value={qualifyText}
                onChange={(e) => setQualifyText(e.target.value)}
              />
            </div>

            {/* Service Type Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Types of service</label>
              <div className="flex flex-col gap-4">
                {checkBoxName?.map((item, index) => (
                  <label key={index} className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      name="service"
                      value={item.title} // Use item.title as the value
                      checked={formData.service.includes(item.title)} // Check based on title or unique identifier
                      onChange={handleChange} // Ensure handleChange properly updates formData
                      className="mr-2 border-[#007EE8]"
                    />
                    <div>
                    <span className="text-[#2C2C2C] md:text-[16px] font-dm-sans">{item.title}</span>
                    <p className="text-[#8D8D8D] md:text-[14px]">{item.subtext}</p> 
                    </div>
                  </label>
                ))}
              </div>
              {errors.service && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.service}</p>}
            </div>

            {/* Visa Applied Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">Have you applied for the Global Talent Visa before?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="visaApplied"
                    value="yes"
                    checked={visaApplied === "yes"}
                    onChange={() => setVisaApplied("yes")}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="visaApplied"
                    value="no"
                    checked={visaApplied === "no"}
                    onChange={() => setVisaApplied("no")}
                  />
                  No
                </label>
              </div>
              {errors.visaApplied && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.visaApplied}</p>}
            </div>

            {/* Visa Status Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">What visa status are you currently on, and how much time do you have left?</label>
              <input
                type="text"
                className="w-full p-2 ps-6    text-[12px] md:text-[16px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6]  rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your visa status and time left"
                value={visaStatus}
                onChange={(e) => setVisaStatus(e.target.value)}
              />
              {errors.visaStatus && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.visaStatus}</p>}
            </div>

            {/* How Found Us Field */}
            <div className="mb-2 text-left">
              <label className="block text-gray-800 text-[14px] md:text-[18px] font-medium mb-3 font-dm-sans">How did you find us?</label>
              <select
                className="border p-2     rounded-md   w-full text-[#A4A4A4] bg-[#F6F6F6]"
                value={foundUs}
                onChange={(e) => setFoundUs(e.target.value)}
              >
                <option value="" disabled>Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="referral">Referral</option>
                <option value="google">Google Search</option>
                <option value="other">Other</option>
              </select>
              {errors.foundUs && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.foundUs}</p>}
            </div>

            {/* Consent Field */}
            <div className="mb-2 text-left">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={() => setConsent(!consent)}
                />
                <span className="text-[12px] md:text-[16px] font-normal font-dm-sans text-[#2C2C2C]">
                  I agree to receive updates and guidance from Smart Immigrant.UK.
                </span>
              </label>
              {errors.consent && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit font-dm-sans bg-[#1641F1] text-white py-2 px-6 rounded-full   hover:scale-110 transition"
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