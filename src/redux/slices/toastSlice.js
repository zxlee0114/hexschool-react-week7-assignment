import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};
const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    pushMassage(state, action) {
      const { text, status } = action.payload;
      const id = Date.now();

      state.messages.push({
        id,
        text,
        status,
      });
    },
  },
});

export const { pushMassage } = toastSlice.actions;
export default toastSlice.reducer;
