import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { showForm: false, answers: {} },
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm;
    },   
     setAnswersStore: (state, action) => {
      const { questionId, selectedOption } = action.payload;
      state.answers = { ...state.answers, [questionId]: selectedOption }; // Ensure immutability
    },
  },
});

export const { toggleForm, setAnswersStore } = formSlice.actions;
export default formSlice.reducer;
