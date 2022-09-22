import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AuthPage = lazy(() =>
  import("../AuthPage").then(({ AuthPage }) => ({
    default: AuthPage,
  }))
);

export function PageRoot() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={"/"} element={<AuthPage />} />
      </Routes>
    </Suspense>
  );
}
