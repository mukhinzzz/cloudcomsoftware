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

export function PageRoot() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"auth"} element={<AuthPage />} />
      </Routes>
    </Suspense>
  );
}
