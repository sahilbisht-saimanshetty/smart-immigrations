import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { showForm: false },
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm; // Toggle between true and false
    },
  },
});

export const { toggleForm } = formSlice.actions;
export default formSlice.reducer;
