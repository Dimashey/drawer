import { LineDrawer } from "./line";
import React from "react";
import { Coordinates } from "../../components/Drawer/type";

export class ParallelLineDrawer extends LineDrawer {
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    super(canvas, context);
  }

  getEndCoordinates(e: React.MouseEvent<HTMLCanvasElement>): Coordinates {
    const { x, y } = this.getMousePosition(e);

    const deltaX = Math.abs(x - this.startX);
    const deltaY = Math.abs(y - this.startY);

    if (deltaX > deltaY) {
      // Coordinates for drawing horizontal line
      return { x, y: this.startY };
    }

    // Coordinates drawing vertical line
    return {
      x: this.startX,
      y,
    };
  }
}
