import { render, screen } from "@testing-library/react";
import Control from "./Control";
import { Props } from "./types";
import { Size } from "../../constants/sizes";
import userEvent from "@testing-library/user-event";

const component = ({ setSize, activeSize }: Props) =>
  render(<Control setSize={setSize} activeSize={activeSize} />);

describe("<Control />", () => {
  it("should render correctly", () => {
    component({ activeSize: Size.Small, setSize: jest.fn() });

    expect(screen.getByTestId("control")).toBeInTheDocument();
  });

  it("should disable active size", () => {
    component({ activeSize: Size.Small, setSize: jest.fn() });

    expect(screen.getByText(Size.Small)).toBeDisabled();
    expect(screen.getByText(Size.Medium)).not.toBeDisabled();
    expect(screen.getByText(Size.Large)).not.toBeDisabled();
  });

  it("should set size", () => {
    const setSize = jest.fn();

    component({ activeSize: Size.Small, setSize });

    userEvent.click(screen.getByText(Size.Medium));

    expect(setSize).toHaveBeenCalledTimes(1);
  });
});
