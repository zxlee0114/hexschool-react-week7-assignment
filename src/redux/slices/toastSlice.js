import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};
const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    pushMessage(state, action) {
      const { text, status } = action.payload;
      const id = Date.now();

      state.messages.push({
        id,
        text,
        status,
      });
    },
    removeMessage(state, action) {
      const messageId = action.payload;
      const index = state.messages.findIndex(
        (message) => message.id === messageId
      );
      if (index !== -1) {
        state.messages.splice(index, 1);
      }
    },
  },
});

export const { pushMessage, removeMessage } = toastSlice.actions;
export default toastSlice.reducer;
