import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  idNumber: "",
};

const voterSlice = createSlice({
  name: "voter",
  initialState,
  reducers: {
    setValues(state, action) {
      state.email = action.payload.email;
      state.idNumber = action.payload.idNumber;
    },
  },
});

export default voterSlice.reducer;

export const voterActions = voterSlice.actions;
