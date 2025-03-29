import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { showForm: false, answers: null },
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm;
    },   
     setAnswersStore: (state, action) => {
      const { data} = action.payload;
      state.answers = { ...state.answers, ...data };
    },
  },
});

export const { toggleForm, setAnswersStore } = formSlice.actions;
export default formSlice.reducer;
