import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice"
import discSlice from "./slices/DiscSlice"

const store = configureStore({
  reducer: {
    form: formSlice,
    disc: discSlice
  },
});

export default store;
