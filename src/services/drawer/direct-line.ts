import { LineDrawer } from "./line";
import React from "react";
import { Coordinates } from "../../components/Drawer/type";

export class DirectLineDrawer extends LineDrawer {
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    super(canvas, context);
  }

  getEndCoordinates(e: React.MouseEvent<HTMLCanvasElement>): Coordinates {
    return this.getMousePosition(e);
  }
}
