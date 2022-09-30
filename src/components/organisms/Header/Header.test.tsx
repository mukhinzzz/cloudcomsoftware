import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import App from "../../../App";

describe("Header", () => {
  it("Must be rendered on all pages", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const HeaderElement = screen.getByRole("banner");
    expect(HeaderElement).toBeInTheDocument();
  });
});
