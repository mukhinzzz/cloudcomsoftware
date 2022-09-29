import { useSelector, useDispatch } from "react-redux";
import { setExtensions } from "../../../store/extensionsSlice/extensionsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { deleteExtension } from "../../../services/chosenExtension";
import { IState } from "../../../store/store";
import { IExtension } from "../../../services/extensions/index";
import "./ChosenExtensionPage.scss";

export function ChosenExtensionPage() {
  const { extensionId } = useParams();
  const { extensions } = useSelector((state: IState) => state.extensions);
  const dispatch = useDispatch();

  let extensionObject: IExtension;

  const navigate = useNavigate();

  let clientId = sessionStorage.getItem("clientId");

  function handleReturn() {
    navigate("/all-extensions");
  }

  async function handleDeletion() {
    if (clientId && extensionId) {
      await deleteExtension(clientId, extensionId)
        .then(() => {
          dispatch(
            setExtensions(
              extensions.filter((item: IExtension) => {
                return item.id !== +extensionId;
              })
            )
          );
          navigate("/all-extensions");
        })
        .then(() =>
          alert("Успешно удалено. После закрытия окна вы будете перенаправлены")
        )
        .catch((e) => {
          console.log(e);
          navigate("/auth");
        });
    }
  }

  extensions.forEach((item: IExtension) => {
    if (item.id === +extensionId!) {
      extensionObject = item;
    }
  });

  const {
    name,
    domain,
    type,
    status,
    label,
    extra_params,
    dial_rule_limit,
    caller_id_name,
    create_date,
  } = extensionObject!;

  return (
    <div className="chosen-extension">
      <div className="container chosen-extension__container">
        <h1 className="heading chosen-extension__heading">
          Информация&nbsp;по выбранному номеру:
        </h1>
        <ul className="list chosen-extension__list">
          <li className="chosen-extension__list-item list-reset">
            Номер: <span> {name || "Неизвестно"} </span>
          </li>
          <li className="chosen-extension__list-item list-reset">
            Домен:<span> {domain || "Неизвестно"}</span>
          </li>
          <li className="chosen-extension__list-item list-reset">
            Тип: <span> {type || "Неизвестно"}</span>
          </li>
          <li className="chosen-extension__list-item list-reset">
            Статус:<span> {status || "Неизвестно"}</span>
          </li>
          <li className="chosen-extension__list-item list-reset">
            Заметка:<span> {label || "Неизвестно"}</span>
          </li>
          <li className="chosen-extension__list-item list-reset">
            Параметры: <span> {extra_params || "Неизвестно"}</span>
          </li>
          <li className="chosen-extension__list-item list-reset">
            Ограничения соединения:
            <span> {dial_rule_limit || "Неизвестно"}</span>
          </li>
          <li className="chosen-extension__list-item list-reset">
            Имя вызывающего: <span> {caller_id_name || "Неизвестно"}</span>
          </li>
          <li className="chosen-extension__list-item list-reset">
            Дата создания:<span> {create_date || "Неизвестно"}</span>
          </li>
        </ul>
        <div className="chosen-extension__button-container">
          <button
            className="button btn-reset button_secondary chosen-extension__button"
            onClick={handleDeletion}
          >
            Удалить этот номер
          </button>
          <button
            className="button btn-reset button_primary  chosen-extension__button"
            onClick={handleReturn}
          >
            Вернуться обратно
          </button>
        </div>
      </div>
    </div>
  );
}
