import { configureStore } from "@reduxjs/toolkit";
import voterSlice from "./voterSlice.js";

const store = configureStore({
  reducer: {
    voter: voterSlice,
  },
});

export default store;
