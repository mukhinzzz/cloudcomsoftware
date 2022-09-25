import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  login: string;
  password: string;
  appId: string;
  appSecret: string;
}

interface IActions {
  payload: string;
  type: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: "",
    password: "",
    appId: "",
    appSecret: "",
  },

  reducers: {
    setLogin: (state: IAuthState, action: IActions) =>
      void (state.login = action.payload),
    setPassword: (state: IAuthState, action: IActions) =>
      void (state.password = action.payload),
    setAppId: (state: IAuthState, action: IActions) =>
      void (state.appId = action.payload),
    setAppSecret: (state: IAuthState, action: IActions) =>
      void (state.appSecret = action.payload),
  },
});

export const { setLogin, setPassword, setAppId, setAppSecret } =
  authSlice.actions;
export default authSlice.reducer;
