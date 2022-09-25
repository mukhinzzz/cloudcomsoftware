import { useDispatch } from "react-redux";
import { getExtensions } from "../../../services/extensions";
import { setExtensions } from "../../../store/extensionsSlice/extensionsSlice";
import { useNavigate } from "react-router-dom";

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
    <>
      <h1>Main Page</h1>
      <button onClick={handleGetExtensions}>Посмотреть мои добавочные</button>
    </>
  );
}
