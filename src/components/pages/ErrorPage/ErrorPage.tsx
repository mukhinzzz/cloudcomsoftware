import { useNavigate } from "react-router-dom";
import error from "../../../img/error.jpg";
import "./ErrorPage.scss";

export function ErrorPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="container error-page__container">
      <h1 className="heading error-page__heading">Такой страницы нет</h1>
      <img className="image error__image" src={error} alt="Error" />
      <button
        className="btn-reset button error-page__button button_primary"
        onClick={handleClick}
      >
        На главную
      </button>
    </div>
  );
}
