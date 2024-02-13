import { render, screen } from "@testing-library/react";
import Control from "./Control";
import { Props } from "./types";
import { LineType, Size } from "../../constants/sizes";
import userEvent from "@testing-library/user-event";

const component = ({ setSize, activeSize, activeType, setType }: Props) =>
  render(
    <Control
      setSize={setSize}
      activeSize={activeSize}
      activeType={activeType}
      setType={setType}
    />,
  );

describe("<Control />", () => {
  it("should render correctly", () => {
    component({
      activeSize: Size.Small,
      setSize: jest.fn(),
      activeType: LineType.Direct,
      setType: jest.fn,
    });

    expect(screen.getByTestId("control")).toBeInTheDocument();
  });

  it("should disable active size", () => {
    component({
      activeSize: Size.Small,
      setSize: jest.fn(),
      activeType: LineType.Direct,
      setType: jest.fn,
    });

    expect(screen.getByText(Size.Small)).toBeDisabled();
    expect(screen.getByText(Size.Medium)).not.toBeDisabled();
    expect(screen.getByText(Size.Large)).not.toBeDisabled();
  });

  it("should set size", () => {
    const setSize = jest.fn();

    component({
      activeSize: Size.Small,
      setSize,
      activeType: LineType.Direct,
      setType: jest.fn,
    });

    userEvent.click(screen.getByText(Size.Medium));

    expect(setSize).toHaveBeenCalledTimes(1);
  });

  it("should disable active type", () => {
    component({
      activeSize: Size.Small,
      setSize: jest.fn(),
      activeType: LineType.Direct,
      setType: jest.fn,
    });

    expect(screen.getByText(LineType.Direct)).toBeDisabled();
    expect(screen.getByText(LineType.Parallel)).not.toBeDisabled();
  });

  it("should set size", () => {
    const setType = jest.fn();

    component({
      activeSize: Size.Small,
      setSize: jest.fn(),
      activeType: LineType.Direct,
      setType: setType,
    });

    userEvent.click(screen.getByText(LineType.Parallel));

    expect(setType).toHaveBeenCalledTimes(1);
  });
});
