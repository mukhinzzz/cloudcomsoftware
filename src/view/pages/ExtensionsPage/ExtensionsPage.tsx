import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExtensions } from "../../../store/extensionsSlice/extensionsSlice";
import { getExtensions } from "../../../services/extensions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IState } from "../../../store/store";
import { IExtension } from "./../../../services/extensions/index";
import "./ExtensionsPage.scss";

export function ExtensionsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { extensions } = useSelector((state: IState) => state.extensions);

  async function getExtensionsToStore() {
    const clientId = localStorage.getItem("clientId");
    if (clientId) {
      await getExtensions(clientId)
        .then((response) => dispatch(setExtensions(response.data)))
        .catch((e) => {
          console.log(e);
          navigate("/auth");
        });
    } else {
      navigate("/auth");
    }
  }

  useEffect(() => {
    getExtensionsToStore();
  }, []);

  return (
    <div className="extensions-page">
      <div className="container extensions-page__container">
        <h1 className="heading extensions-page__heading">
          Ваши добавочные номера:
        </h1>
        <div className="extensions-page__links-container">
          {extensions.map((item: IExtension) => {
            return (
              <>
                <Link
                  className="extensions-page__link"
                  key={item.id}
                  to={`/extension/${item.id}`}
                >
                  {item.name}
                </Link>
              </>
            );
          })}
        </div>
        <span className="extensions-page__description">
          Вы можете кликнуть по номеру, чтобы увидеть дополнительную информацию
        </span>
      </div>
    </div>
  );
}
