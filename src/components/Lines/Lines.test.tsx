import { Props } from "./types";
import { render, screen } from "@testing-library/react";
import Lines from "./Lines";

const component = ({ lines }: Props) => render(<Lines lines={lines} />);

describe("<Lines />", () => {
  it("should render correctly", () => {
    component({
      lines: [
        { startX: 10, startY: 10, endX: 20, endY: 20 },
        {
          startX: 30,
          startY: 30,
          endX: 40,
          endY: 40,
        },
      ],
    });

    expect(screen.getByTestId("lines")).toBeInTheDocument();
    expect(screen.getByTestId("lines").children.length).toEqual(2);
  });
});
