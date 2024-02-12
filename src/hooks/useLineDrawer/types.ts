import React, { RefObject } from "react";
import { Coordinates } from "../../components/Drawer/type";

export type Params = {
  canvasRef: RefObject<HTMLCanvasElement>;
};

export type Return = {
  startDrawing: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  draw: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  endDrawing: () => void;

  startPoint: Coordinates | null;
  endPoint: Coordinates | null;
};
