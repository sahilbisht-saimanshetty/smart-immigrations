import { createSlice } from "@reduxjs/toolkit";

const discSlice = createSlice({
  name: "disc",
  initialState: { accepted: null }, // null means no action taken yet
  reducers: {
    accept: (state) => {
      state.accepted = true;
    },
    reject: (state) => {
      state.accepted = false;
    },
  },
});

export const { accept, reject } = discSlice.actions;
export default discSlice.reducer;
