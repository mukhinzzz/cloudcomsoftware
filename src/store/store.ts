import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import extensionsReducer from "./extensionsSlice/extensionsSlice";
import { IAuthState } from "./authSlice/authSlice";
import { IExtensionsState } from "./extensionsSlice/extensionsSlice";

export interface IState {
  auth: IAuthState;
  extensions: IExtensionsState;
}

export default configureStore({
  reducer: {
    auth: authReducer,
    extensions: extensionsReducer,
  },
});
