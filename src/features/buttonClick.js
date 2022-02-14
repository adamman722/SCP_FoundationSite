import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "isClicked",
  initialState: { value: false },
  reducers: {
    clickButton: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { clickButton } = buttonSlice.actions;

export default buttonSlice.reducer;
