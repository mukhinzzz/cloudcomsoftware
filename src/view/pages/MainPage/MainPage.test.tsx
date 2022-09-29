import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./../../../App";
import { PageRoot } from "./../PageRoot/PageRoot";
import { MainPage } from "./MainPage";
import { FileWatcherEventKind } from "typescript";

// describe("Main Page", () => {
//   it("should render home page", () => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <PageRoot />
//         </BrowserRouter>
//       </Provider>
//     );

//     const main = screen.getByTestId("main");
//   });

//   it("should go to the auth or extensions page", () => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <MainPage />
//         </BrowserRouter>
//       </Provider>
//     );
//     fireEvent.click(screen.getByTestId("main button"));
//     expect(screen.getByTestId("auth")).toBeInTheDocument();
//   });
// });
