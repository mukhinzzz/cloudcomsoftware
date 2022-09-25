import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExtensions } from "../../../store/extensionsSlice/extensionsSlice";
import { getExtensions } from "../../../services/extensions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function ExtensionsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { extensions } = useSelector((state: any) => state.extensions);

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
    <ul>
      {extensions.map((item: any) => {
        return (
          <>
            <Link to={`/extension/${item.id}`}>{item.name}</Link>
            <br />
          </>
        );
      })}
    </ul>
  );
}
