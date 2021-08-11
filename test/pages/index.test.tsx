import { fireEvent, render } from "@testing-library/react";
import Home from "../../pages";

describe("Home page", () => {
  it("プレースホルダーあるかな", () => {
    const { getByPlaceholderText } = render(<Home />);

    expect(getByPlaceholderText("Basic usage")).toBeInTheDocument();
  });

  it("値変わるかな", () => {
    const { getByTestId } = render(<Home />);
    const input = getByTestId("hoge");

    fireEvent.change(input, { target: { value: "konnitiwa" } });
    expect(getByTestId("fuga")).toHaveTextContent("konnitiwa");
  });
});
