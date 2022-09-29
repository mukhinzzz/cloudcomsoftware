import { BrowserRouter } from "react-router-dom";
import { PageRoot } from "./view/pages/PageRoot";
import { Header } from "./view/organisms/Header";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageRoot />
    </BrowserRouter>
  );
}

export default App;
