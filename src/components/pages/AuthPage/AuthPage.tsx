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
import "./AuthPage.scss";

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

  function pasteTestInfo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(setLogin("Muhin_Ivan"));
    dispatch(setPassword("123qweasdZXC"));
    dispatch(setAppId("f8115578ec7246369ab37f73adb10c62"));
    dispatch(setAppSecret("1e1c99cc6ba94893a7616e2ececaaf28"));
  }

  function clearAll() {
    dispatch(setLogin(""));
    dispatch(setPassword(""));
    dispatch(setAppId(""));
    dispatch(setAppSecret(""));
    sessionStorage.clear();
  }

  async function handleFormSubmit(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    await getToken(login, password, appId, appSecret)
      .then((response) => {
        sessionStorage.setItem("accessToken", response.data.access_token);
        sessionStorage.setItem("refreshToken", response.data.refresh_token);
        getClient()
          .then((response) => {
            sessionStorage.setItem("clientId", String(response.data.client_id));
            navigate("/all-extensions");
          })
          .catch((e) => {
            clearAll();
            return e;
          });
      })
      .catch(() => {
        clearAll();
        alert("Что-то пошло не так. Попробуйте еще раз");
      });
  }

  return (
    <div className="auth" data-testid="auth">
      <div className="container auth__container">
        <h1 className="heading auth__heading">Аутентификация</h1>
        <form className="form auth__form" onSubmit={handleFormSubmit}>
          <label className="form__field">
            Ваш App ID{" "}
            <input
              type="text"
              onChange={changeHandler}
              value={appId}
              id="app-id"
            />
          </label>
          <br />
          <br />
          <label className="form__field">
            {" "}
            Ваш App Secret{" "}
            <input
              type="text"
              onChange={changeHandler}
              value={appSecret}
              id="app-secret"
            />
          </label>

          <br />
          <br />
          <label className="form__field">
            Логин{" "}
            <input
              type="text"
              onChange={changeHandler}
              value={login}
              id="login"
            />
          </label>
          <br />
          <br />
          <label className="form__field">
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
          <div className="auth__buttons">
            <input
              type="submit"
              className="button button_primary auth__button btn-reset"
              value="Отправить информацию"
            />
            <button
              className="button button_secondary auth__button auth__button_right btn-reset"
              onClick={pasteTestInfo}
              data-testid="test_info"
            >
              Заполнить тестовой информацией
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
