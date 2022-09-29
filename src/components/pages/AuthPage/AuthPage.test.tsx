import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { BrowserRouter } from "react-router-dom";
import { AuthPage } from "./AuthPage";

describe("Auth Page", () => {
  it("all inputs should be working", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthPage />
        </BrowserRouter>
      </Provider>
    );

    function changeAllInputs(label: string, value: string | number) {
      fireEvent.change(screen.getByLabelText(label), {
        target: {
          value: `Test ID ${value}`,
        },
      });
    }

    changeAllInputs("Ваш App ID", 1);
    changeAllInputs("Ваш App Secret", 2);
    changeAllInputs("Логин", 3);
    changeAllInputs("Пароль", 4);

    expect(screen.getByDisplayValue("Test ID 1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test ID 2")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test ID 3")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test ID 4")).toBeInTheDocument();
  });

  it("testing info should appear when clicking a button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthPage />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByTestId("test_info"));

    expect(screen.getByLabelText("Ваш App ID")).toHaveDisplayValue(
      "f8115578ec7246369ab37f73adb10c62"
    );
    expect(screen.getByLabelText("Ваш App Secret")).toHaveDisplayValue(
      "1e1c99cc6ba94893a7616e2ececaaf28"
    );
    expect(screen.getByLabelText("Логин")).toHaveDisplayValue("Muhin_Ivan");
    expect(screen.getByLabelText("Пароль")).toHaveDisplayValue("123qweasdZXC");
  });
});
