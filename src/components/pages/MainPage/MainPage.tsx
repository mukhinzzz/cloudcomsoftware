import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getExtensions } from "../../../services/extensions";
import { setExtensions } from "../../../store/extensionsSlice/extensionsSlice";
import { useNavigate } from "react-router-dom";
import phoneBg from "../../../img/phone-bg.png";
import "./MainPage.scss";

export function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ws = useRef<WebSocket | null>(null);

  async function handleGetExtensions() {
    const accessToken = sessionStorage.getItem("accessToken");
    const clientId = sessionStorage.getItem("clientId");

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

  function socketTest() {
    if (ws.current) ws.current.send("TEST");
  }

  // function testSocket() {
  //     ws.current = new WebSocket("ws://localhost:12345");
  //     ws.current.onopen = () => alert("Соединение открыто");
  //     ws.current.onmessage = (e) => alert(e.data);
  //     // if (ws.current) ws.current.send("TEST");
  //   }

  // useEffect(() => {
  //   ws.current = new WebSocket("ws://localhost:12345");
  //   // ws.current.onopen = () => alert("Соединение открыто");
  //   ws.current.onmessage = (e) => alert(e.data);

  //   return () => ws.current?.close();
  // }, []);

  return (
    <div className="main" data-testid="main">
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
          data-testid="main button"
        >
          Посмотреть мои добавочные
        </button>
        <button
          className="button button_secondary main__button btn-reset"
          onClick={socketTest}
        >
          Проверить соединение с WebSocket
        </button>
      </div>
    </div>
  );
}
