import { BrowserRouter } from "react-router-dom";
import { PageRoot } from "./components/pages/PageRoot";
import { Header } from "./components/organisms/Header";
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
