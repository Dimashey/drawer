import { render, screen } from "@testing-library/react";
import Drawer from "./Drawer";
import { Props } from "./type";
import { LineType, Size } from "../../constants/sizes";

const component = ({ activeSize, lines, addLine, lineType }: Props) =>
  render(
    <Drawer
      lines={lines}
      addLine={addLine}
      activeSize={activeSize}
      lineType={lineType}
    />,
  );

describe("<Drawer />", () => {
  it("should render correctly", () => {
    component({
      activeSize: Size.Small,
      lines: [],
      addLine: jest.fn(),
      lineType: LineType.Direct,
    });

    const drawer = screen.getByTestId<HTMLCanvasElement>("drawer");
    expect(drawer).toBeInTheDocument();
    expect(drawer.width).toEqual(1200);
    expect(drawer.height).toEqual(800);
  });

  describe("handle sizes", () => {
    it("should render small size", () => {
      component({
        activeSize: Size.Small,
        lines: [],
        addLine: jest.fn(),
        lineType: LineType.Direct,
      });

      const drawer = screen.getByTestId<HTMLCanvasElement>("drawer");
      expect(drawer.style.width).toEqual("300px");
      expect(drawer.style.height).toEqual("200px");
    });

    it("should render medium size", () => {
      component({
        activeSize: Size.Medium,
        lines: [],
        addLine: jest.fn(),
        lineType: LineType.Direct,
      });

      const drawer = screen.getByTestId<HTMLCanvasElement>("drawer");
      expect(drawer.style.width).toEqual("600px");
      expect(drawer.style.height).toEqual("400px");
    });

    it("should render large size", () => {
      component({
        activeSize: Size.Large,
        lines: [],
        addLine: jest.fn(),
        lineType: LineType.Direct,
      });

      const drawer = screen.getByTestId<HTMLCanvasElement>("drawer");
      expect(drawer.style.width).toEqual("900px");
      expect(drawer.style.height).toEqual("600px");
    });
  });
});
