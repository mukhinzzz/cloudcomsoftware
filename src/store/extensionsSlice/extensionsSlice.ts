import { createSlice } from "@reduxjs/toolkit";
import { IExtension } from "../../services/extensions/index";

interface IActions {
  payload: IExtension[];
  type: string;
}

export interface IExtensionsState {
  extensions: IExtension[];
}

export const extensionsSlice = createSlice({
  name: "extensions",
  initialState: {
    extensions: [],
  },

  reducers: {
    setExtensions: (state: IExtensionsState, action: IActions) =>
      void (state.extensions = action.payload),
  },
});

export const { setExtensions } = extensionsSlice.actions;
export default extensionsSlice.reducer;
