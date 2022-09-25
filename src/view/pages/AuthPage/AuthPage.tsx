// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLogin,
  setPassword,
  setAppId,
  setAppSecret,
} from "../../../store/authSlice/authSlice";
import { getToken } from "../../../services/auth";
import { getClient } from "../../../services/client";
import { IState } from "../../../store/store";

export function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { login, password, appId, appSecret } = useSelector(
    (state: IState) => state.auth
  );

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.id === "login") {
      dispatch(setLogin(e.target.value));
    } else if (e.target.id === "password") {
      dispatch(setPassword(e.target.value));
    } else if (e.target.id === "app-id") {
      dispatch(setAppId(e.target.value));
    } else if (e.target.id === "app-secret") {
      dispatch(setAppSecret(e.target.value));
    }
  }

  async function handleFormSubmit(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    await getToken(login, password, appId, appSecret)
      .then((response) => {
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        getClient()
          .then(() => navigate("/all-extensions"))
          .catch((e) => e);
      })
      .catch(() => alert("Что-то пошло не так. Попробуйте еще раз"));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        ID{" "}
        <input type="text" onChange={changeHandler} value={appId} id="app-id" />
      </label>
      <br />
      <br />
      <label>
        {" "}
        Секрет{" "}
        <input
          type="text"
          onChange={changeHandler}
          value={appSecret}
          id="app-secret"
        />
      </label>

      <br />
      <br />
      <label>
        Логин{" "}
        <input type="text" onChange={changeHandler} value={login} id="login" />
      </label>
      <br />
      <br />
      <label>
        Пароль{" "}
        <input
          type="password"
          onChange={changeHandler}
          value={password}
          id="password"
        />
      </label>
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}
