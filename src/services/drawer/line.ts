import React from "react";
import { Coordinates } from "../../components/Drawer/type";
import { drawLine } from "../../utils/draw";

export abstract class LineDrawer {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  startX: number;
  startY: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.startX = 0;
    this.startY = 0;
  }

  // Get relative mouse position in canvas
  protected getMousePosition(
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  public setStartMousePosition(
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ): Coordinates {
    const { x, y } = this.getMousePosition(e);

    this.startX = x;
    this.startY = y;

    return { x, y };
  }

  abstract getEndCoordinates(
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ): Coordinates;

  draw(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>): Coordinates {
    const { x, y } = this.getEndCoordinates(e);

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();

    drawLine(this.context, this.startX, this.startY, x, y);

    return { x, y };
  }
}
