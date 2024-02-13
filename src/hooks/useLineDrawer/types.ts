import React, { RefObject } from "react";
import { Coordinates } from "../../components/Drawer/type";
import { LineType } from "../../constants/sizes";

export type Params = {
  canvasRef: RefObject<HTMLCanvasElement>;
  lineType: LineType;
};

export type Return = {
  startDrawing: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  draw: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  endDrawing: () => void;

  startPoint: Coordinates | null;
  endPoint: Coordinates | null;
};
