import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AuthPage = lazy(() =>
  import("../AuthPage").then(({ AuthPage }) => ({
    default: AuthPage,
  }))
);
const MainPage = lazy(() =>
  import("../MainPage").then(({ MainPage }) => ({
    default: MainPage,
  }))
);
const ExtensionsPage = lazy(() =>
  import("../ExtensionsPage").then(({ ExtensionsPage }) => ({
    default: ExtensionsPage,
  }))
);
const ChosenExtensionPage = lazy(() =>
  import("../ChosenExtensionPage").then(({ ChosenExtensionPage }) => ({
    default: ChosenExtensionPage,
  }))
);

const ErrorPage = lazy(() =>
  import("../ErrorPage").then(({ ErrorPage }) => ({
    default: ErrorPage,
  }))
);

const WebsocketPage = lazy(() =>
  import("../WebsocketPage").then(({ WebsocketPage }) => ({
    default: WebsocketPage,
  }))
);

export function PageRoot() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"auth"} element={<AuthPage />} />
        <Route path={"all-extensions"} element={<ExtensionsPage />} />
        <Route
          path={"extension/:extensionId"}
          element={<ChosenExtensionPage />}
        />
        <Route path={"websocket"} element={<WebsocketPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
