import { Logo } from "../Logo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setLogin,
  setPassword,
  setAppId,
  setAppSecret,
} from "../../../store/authSlice/authSlice";
import logout from "../../../img/logout.svg";
import "./Header.scss";

export function Header() {
  const dispatch = useDispatch();

  function logOut() {
    dispatch(setLogin(""));
    dispatch(setPassword(""));
    dispatch(setAppId(""));
    dispatch(setAppSecret(""));
    localStorage.clear();

    navigate("/");
  }

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        {localStorage.getItem("accessToken") ? (
          <>
            <button
              onClick={logOut}
              className="button btn-reset button_primary header__button header__button_logout"
              data-testId="logout"
            >
              Разлогиниться
            </button>
            <img
              className="icon header__icon header__icon_logout"
              src={logout}
              alt="Log out"
              onClick={logOut}
              data-testid="logout"
            />
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
