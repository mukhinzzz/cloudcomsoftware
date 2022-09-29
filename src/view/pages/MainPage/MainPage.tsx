import { useDispatch } from "react-redux";
import { getExtensions } from "../../../services/extensions";
import { setExtensions } from "../../../store/extensionsSlice/extensionsSlice";
import { useNavigate } from "react-router-dom";
import phoneBg from "../../../img/phone-bg.png";
import "./MainPage.scss";

export function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleGetExtensions() {
    const accessToken = localStorage.getItem("accessToken");
    const clientId = localStorage.getItem("clientId");

    if (accessToken && clientId) {
      getExtensions(clientId)
        .then((response) => {
          dispatch(setExtensions(response.data));
          navigate("/all-extensions");
        })
        .catch(() => navigate("/auth"));
    } else {
      navigate("/auth");
    }
  }

  return (
    <div className="main">
      <div className="container main__container">
        <h1 className="heading main__heading">Добавочные номера</h1>
        <div className="main__info">
          <div className="main__description">
            <ul className="main__description_first-line list-reset">
              Здесь вы можете:
            </ul>{" "}
            <li className="main__description_other-line list-reset">
              - Проверить свои добавочные номера
            </li>{" "}
            <li className="main__description_other-line list-reset">
              - Удалить ненужные вам добавочные
            </li>
          </div>
          <img className="main__bg" src={phoneBg} alt="telephone" />
        </div>

        <button
          className="button button_primary main__button btn-reset"
          onClick={handleGetExtensions}
        >
          Посмотреть мои добавочные
        </button>
      </div>
    </div>
  );
}
