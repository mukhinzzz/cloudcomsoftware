// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLogin,
  setPassword,
  setAppId,
  setAppSecret,
  setToken,
} from "../../../store/authSlice/authSlice";
import qs from "qs";
// import { authUser } from "../../../services/auth";
// import axios from "axios";
import $api from "../../../services";
import { getToken } from "../../../services/auth";
import { getClient } from "../../../services/client";

export function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login, password, appId, appSecret } = useSelector(
    (state: any) => state.auth
  );

  function changeHandler(e: any) {
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

  async function handleFormSubmit(e: any) {
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
  // const [post, setPost] = useState(null);

  // const baseURL = "https://apiproxy.telphin.ru/oauth/token";

  // const userURL = "https://apiproxy.telphin.ru/api/ver1.0/user/";

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // async function getToken(e: any) {
  //   e.preventDefault();

  //   $api
  //     .post(
  //       baseURL,
  //       qs.stringify({
  //         grant_type: "password",
  //         username: login,
  //         password: password,
  //         client_id: appId,
  //         client_secret: appSecret,
  //       })
  //     )
  //     .then((response) => {
  //       localStorage.setItem("accessToken", response.data.access_token);
  //       getClient();
  //     })
  //     .then(() => navigate("/all-extensions"));
  //   // .then(() => {
  //   //   console.log(localStorage.getItem("accessToken"));
  //   //   $api.get(userURL).then((response) => console.log(response));
  //   // });
  // }

  // function getClient() {
  //   $api
  //     .get(userURL)
  //     .then((response) =>
  //       localStorage.setItem("clientId", response.data.client_id)
  //     );
  // }

  // let clientId = 29;

  // let extensionId = 128;

  // function getChosenExtension(e: any) {
  //   $api
  //     .get(
  //       `https://apiproxy.telphin.ru/api/ver1.0/client/${
  //         clientId || 29
  //       }/extension/${extensionId || 128}`
  //     )
  //     .then((response) => console.log(response));
  // }

  // useEffect(() => {
  //   testPost();
  // }, []);

  // async function loginUser(login: string, password: string) {
  //   const userSession = await authUser(login, password);
  // }

  // function submitHandler(e: any) {
  //   e.preventDefault();
  //   if (login && password) {
  //     loginUser(login, password);
  //   } else {
  //     alert("Пожалуйста, заполните все поля");
  //   }
  // }

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
      {/* <button onClick={getClient}>Getting client</button> */}
      {/* <button onClick={getExtensions}>Getting extensions</button> */}
      {/* <button onClick={getChosenExtension}>Get chosen extension</button> */}
    </form>
  );
}
