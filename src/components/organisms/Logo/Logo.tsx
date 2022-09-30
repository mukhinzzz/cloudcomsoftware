import logo from "../../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import "./Logo.scss";

export function Logo() {
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

  return (
    <img
      className="logo header__logo"
      src={logo}
      alt="Logotype"
      onClick={navigateToMain}
    />
  );
}
