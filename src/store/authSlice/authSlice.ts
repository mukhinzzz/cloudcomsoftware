import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: "",
    password: "",
    token: "",
  },

  reducers: {
    setLogin: (state, action) => void (state.login = action.payload),
    setPassword: (state, action) => void (state.password = action.payload),
    setToken: (state, action) => void (state.token = action.payload),
  },
});

export const { setLogin, setPassword, setToken } = authSlice.actions;
export default authSlice.reducer;
