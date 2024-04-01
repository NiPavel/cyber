import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  idNumber: "",
};

const voterSlice = createSlice({
  name: "voter",
  initialState,
  reducers: {},
});

export default voterSlice.reducer;

export const voterActions = voterSlice.actions;
