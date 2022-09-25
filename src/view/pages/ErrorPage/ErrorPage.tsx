import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <h1>This page is not exist</h1>
      <button onClick={handleClick}>Go to the Main Page</button>
    </>
  );
}
