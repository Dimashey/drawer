import { Size } from "../../constants/sizes";
import { Line } from "../../types/line";

export type Props = {
  activeSize: Size;
  addLine: (line: Line) => void;
  lines: Line[];
};
export type Coordinates = { x: number; y: number };
