import "./WebsocketPage.scss";
import { useRef, useState } from "react";
import { useEffect } from "react";

export function WebsocketPage() {
  const ws = useRef<WebSocket | null>(null);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [luckyNumber, setLuckyNumber] = useState("");

  function createConnection() {
    ws.current = new WebSocket("ws://localhost:12345");
    ws.current.onopen = () => {
      setConnectionStatus(true);
    };
    ws.current.onclose = () => {
      setConnectionStatus(false);
    };
    ws.current.onmessage = (e: MessageEvent) => setLuckyNumber(e.data);
  }

  useEffect(() => {
    createConnection();
  }, []);

  function sendRequestForNumber() {
    ws.current?.send("Generate number");
  }

  //   function closeConnection() {
  //     ws.current?.close(1000);
  //   }

  return (
    <div className="websocket">
      <div className="container websocket__container">
        <h1 className="heading websocket__heading">Счастливый добавочный</h1>
        <p className="description websocket__description">
          Здесь вы можете получить счастливый добавочный номер (пока что это
          бесплатно, поторопитесь!)
        </p>
        <p className="description websocket__description">
          Номер генерируется сервером и отправляется по протоколу WebSocket
        </p>
        {/* <p>Инструкция:</p> */}
        <p className="description websocket__description">
          Перед тестом нужно запустить локальный сервер из файла main.py
        </p>
        {luckyNumber ? (
          <div className="lucky-number websocket__lucky-number">
            <span className="lucky-number__description">
              Ваш счастливый номер:
            </span>{" "}
            <span className="lucky-number__number">{luckyNumber}</span>
          </div>
        ) : (
          ""
        )}

        <span className="websocket__connection-description">
          Статус соединения:
        </span>
        {connectionStatus ? (
          <span className="websocket__connection-status websocket__connection-status_green">
            Соединено
          </span>
        ) : (
          <span className="websocket__connection-status websocket__connection-status_red">
            Разъединено
          </span>
        )}
        <button
          className="button button_primary websocket__button btn-reset"
          onClick={sendRequestForNumber}
        >
          Получить счастливый номер
        </button>
        {/* <button
          className="button button_secondary websocket__button btn-reset"
          onClick={createConnection}
        >
          Реконнект
        </button> */}
        {/* <button
          className="button button_secondary websocket__button btn-reset"
          onClick={closeConnection}
        >
          Закрыть соединение
        </button> */}
        {/* <p>
          Затем нажать кнопку "Открыть WS-канал". Если соединение будет успешно
          открыто, то статус соединения изменится на "Открыто"
        </p>
        <p>Затем нажмите кнопку "Сгенерировать счастливый добавочный"</p>
        <p>
          В этот момент на сервер будет послано сообщение, а он сгенерирует нам
          случайный добавочный номер
        </p>
        <p>Мы получим число от сервера мгновенно</p>
        <p>
          Использование счастливого добавочного дает вам +100 к удаче и
          иммунитет к мобилизации
        </p>
        <p>Окончив сеанс, нажмите "Закрыть WS-канал"</p> */}
      </div>
    </div>
  );
}
