import logo from "../../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import "./Logo.scss";

export function Logo() {
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

  return (
    // <a className="logo header__logo" href="/">
    <img
      className="logo header__logo"
      src={logo}
      alt="Logotype"
      onClick={navigateToMain}
    />
    // </a>
  );
}
