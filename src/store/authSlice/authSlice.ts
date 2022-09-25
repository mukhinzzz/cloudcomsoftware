import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: "",
    password: "",
    token: "",
    appId: "",
    appSecret: "",
  },

  reducers: {
    setLogin: (state, action) => void (state.login = action.payload),
    setPassword: (state, action) => void (state.password = action.payload),
    setToken: (state, action) => void (state.token = action.payload),
    setAppId: (state, action) => void (state.appId = action.payload),
    setAppSecret: (state, action) => void (state.appSecret = action.payload),
  },
});

export const { setLogin, setPassword, setAppId, setAppSecret, setToken } =
  authSlice.actions;
export default authSlice.reducer;
