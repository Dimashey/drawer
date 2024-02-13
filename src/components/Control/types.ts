import { LineType, Size } from "../../constants/sizes";

export type Props = {
  activeSize: Size;
  setSize: (size: Size) => void;
  activeType: LineType;
  setType: (type: LineType) => void;
};
