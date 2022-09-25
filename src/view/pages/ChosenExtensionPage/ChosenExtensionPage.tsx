import { useSelector, useDispatch } from "react-redux";
import { setExtensions } from "../../../store/extensionsSlice/extensionsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { deleteExtension } from "../../../services/chosenExtension";
import { IState } from "../../../store/store";
import { IExtension } from "./../../../services/extensions/index";

export function ChosenExtensionPage() {
  const { extensionId } = useParams();
  const { extensions } = useSelector((state: IState) => state.extensions);
  const dispatch = useDispatch();
  // interface IExtensionObject {
  //   name: string;
  //   domain: string;
  //   type: string;
  //   status: string;
  //   label: string;
  //   extra_params: string;
  //   dial_rule_limit: string;
  //   caller_id_name: string;
  //   create_date: string;
  // }

  let extensionObject: IExtension;

  const navigate = useNavigate();

  let clientId = localStorage.getItem("clientId");

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
    <>
      <ul>
        <li>Name: {name || "Is not defined"}</li>
        <li>Domain: {domain || "Is not defined"}</li>
        <li>Type: {type || "Is not defined"}</li>
        <li>Status: {status || "Is not defined"}</li>
        <li>Label: {label || "Is not defined"}</li>
        <li>Extra params: {extra_params || "Is not defined"}</li>
        <li>Dial rule limit: {dial_rule_limit || "Is not defined"}</li>
        <li>Caller id name: {caller_id_name || "Is not defined"}</li>
        <li>Create date: {create_date || "Is not defined"}</li>
      </ul>
      <button onClick={handleDeletion}>Delete extension</button>
    </>
  );
}
