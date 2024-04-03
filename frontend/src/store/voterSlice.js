import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  idNumber: "",
  voted: false,
  name: "",
};

const voterSlice = createSlice({
  name: "voter",
  initialState,
  reducers: {
    setValues(state, action) {
      state.email = action.payload.email;
      state.idNumber = action.payload.idNumber;
      state.voted = action.payload.voted;
      state.name = action.payload.name;
    },
  },
});

export default voterSlice.reducer;

export const voterActions = voterSlice.actions;
