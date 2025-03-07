import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: [] };
const toastSlice = createSlice({
  name: toastSlice,
  initialState,
});

export default toastSlice.reducer;
