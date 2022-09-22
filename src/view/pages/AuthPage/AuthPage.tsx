// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLogin,
  setPassword,
  setToken,
} from "../../../store/authSlice/authSlice";

export function AuthPage() {
  const dispatch = useDispatch();
  const { login, password, token } = useSelector((state: any) => state.auth);

  function changeHandler(e: any) {
    if (e.target.id === "login") {
      dispatch(setLogin(e.target.value));
    } else {
      dispatch(setPassword(e.target.value));
    }
  }

  function submitHandler(e: any) {
    e.preventDefault();
    if (login && password) {
      alert("Отправляем запрос...");
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  }

  return (
    <form onSubmit={submitHandler}>
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
