import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  basicDetails: {
    name: "",
    email: "",
    phone: "",
    linkedin: ""
  },
  generalDetails: {
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
  }
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm;
    },
    setBasicDetails: (state, action) => {
      state.basicDetails = { ...state.basicDetails, ...action.payload };
    },
    setGeneralDetails: (state, action) => {
      state.generalDetails = { ...state.generalDetails, ...action.payload };
    },
    resetForm: (state) => {
      state.basicDetails = initialState.basicDetails;
      state.generalDetails = initialState.generalDetails;
    },
    setAnswersStore: (state, action) => {
      console.warn("setAnswersStore is deprecated. Use setBasicDetails or setGeneralDetails instead.");
    }
  }
});

export const { 
  toggleForm, 
  setBasicDetails, 
  setGeneralDetails, 
  resetForm,
  setAnswersStore 
} = formSlice.actions;

export default formSlice.reducer;