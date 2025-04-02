import { useEffect, useState } from "react";
import { toggleForm, setAnswersStore } from "../../store/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
const AssessmentModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.form.showForm);
  const StoredAnswers = useSelector((state) => state.form.answers);

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

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.linkedin) newErrors.linkedin = "LinkedIn is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedValue = {...formData ,   service: checked
        ? [...formData.service, value]
        : formData.service.filter((s) => s !== value) }
      
      setFormData(updatedValue);
      dispatch(setAnswersStore({data : updatedValue }))
    } else {
      setFormData({ ...formData, [name]: value });
      dispatch(setAnswersStore({data : {...formData , [name]: value }}))
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
    }
  };

  useEffect(() => {
    if(StoredAnswers) {
      setFormData(StoredAnswers)
    }
  } , [StoredAnswers])

  const checkBoxName = ["Fully Automated", "Semi Automated", "Hand-ons Automated"]



  return (
    <div className="fixed inset-0 bg-[#000000]  bg-opacity-60 backdrop-blur-[15px] flex items-center justify-center h-[100vh] w-[100vw] z-[1000]" onClick={onClose}>
      <div className="flex justify-center items-center rounded-lg w-[95%] md:w-[85%] lg:w-[55%] bg-white px-2 md:px-4 lg:px-10" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="p-4 md:p-8  w-full">
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] text-[#2C2C2C] font-jakarta-sans font-bold text-center mb-6">Please Fill the Basic Details</h2>
          <div className="space-y-6">
            <div className="mb-4 text-left">
              <label className="block text-[#2C2C2C] text-[16px] md:text-[20px] font-medium mb-3 font-dm-sans">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 ps-6 text-[14px] md:text-[18px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.name}</p>}
            </div>
            <div className="flex flex-col mb-4 md:flex-row justify-between w-full">
              <div className="text-left mb-4 md:mb-0 w-[100%] md:w-[45%]">
                <label className="block text-[#2C2C2C] text-[16px] md:text-[20px] font-medium mb-3 font-dm-sans">Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 ps-6 text-[14px] md:text-[18px] font-normal font-dm-sans text-[#A4A4A4]  bg-[#F6F6F6] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.email}</p>}
              </div>
              <div className="text-left w-[100%] md:w-[45%]">
                <label className="block text-[#2C2C2C] text-[16px] md:text-[20px] font-medium  mb-3 font-dm-sans">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 ps-6  text-[14px] md:text-[18px] font-normal font-dm-sans text-[#A4A4A4] bg-[#F6F6F6] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && <p className="text-red-500  font-dm-sans ps-4 pt-2 text-sm">{errors.phone}</p>}
              </div>

            </div>

            <div className="mb-4 text-left">
              <label className="block text-[#2C2C2C] text-[16px] md:text-[20px] font-medium mb-3 font-dm-sans">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                placeholder="Eg. Alexa/ LinkedInprofile.com"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full p-2 ps-6 text-[14px] md:text-[18px] font-normal font-dm-sans text-[#A4A4A4]  bg-[#F6F6F6] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.linkedin && <p className="text-red-500 font-dm-sans ps-4 pt-2 text-sm">{errors.linkedin}</p>}
            </div>
            <div className="mb-4 text-left">
              <label className="block text-[#2C2C2C] text-[16px] md:text-[20px] font-medium mb-3 font-dm-sans">Types of service</label>
              <div className="flex flex-col md:flex-row gap-4">
                {

                  checkBoxName?.map((item, index) => <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="service"
                      value={item}
                      key={index}
                      checked={formData.service.includes(item)}
                      onChange={handleChange}
                      className="mr-2 border-[#007EE8]"
                    />
                    <span className="text-[#8D8D8D] md:text-[18px] font-dm-sans">{item}</span>

                  </label>)
                }
              </div>
            </div>


            <button
              type="submit"
              className="w-fit font-dm-sans bg-[#1641F1] text-white py-2 px-6  rounded-full hover:scale-110 transition"
            >
              Submit
            </button>


          </div>

        </form>
      </div>
    </div>
  );
};

export default AssessmentModal;



