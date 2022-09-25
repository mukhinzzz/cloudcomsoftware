import { createSlice } from "@reduxjs/toolkit";

export const extensionsSlice = createSlice({
  name: "extensions",
  initialState: {
    extensions: [],
  },

  reducers: {
    setExtensions: (state, action) => void (state.extensions = action.payload),
  },
});

export const { setExtensions } = extensionsSlice.actions;
export default extensionsSlice.reducer;
