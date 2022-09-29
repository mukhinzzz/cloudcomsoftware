import logo from "../../../img/logo.svg";
import "./Logo.scss";

export function Logo() {
  return (
    <a className="logo header__logo" href="/">
      <img src={logo} alt="Logotype" />
    </a>
  );
}
