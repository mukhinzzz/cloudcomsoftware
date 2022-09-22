import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <>
      <h1>Main Page</h1>
      <Link to="/auth">Посмотреть мои добавочные</Link>
    </>
  );
}
