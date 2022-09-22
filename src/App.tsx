import { BrowserRouter } from "react-router-dom";
import { PageRoot } from "./view/pages/PageRoot";

function App() {
  return (
    <BrowserRouter>
      <PageRoot />
    </BrowserRouter>
  );
}

export default App;
