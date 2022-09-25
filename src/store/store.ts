import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import extensionsReducer from "./extensionsSlice/extensionsSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    extensions: extensionsReducer,
  },
});
