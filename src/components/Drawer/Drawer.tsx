import React, { useRef } from "react";
import "./Drawer.css";
import {
  INTERNAL_CANVAS_HEIGHT,
  INTERNAL_CANVAS_WIDTH,
  SIZE_PROPERTIES,
} from "./constants";
import { Props } from "./type";
import useLineDrawer, { drawLine } from "../../hooks/useLineDrawer";

const Drawer: React.FC<Props> = ({ activeSize, addLine, lines }) => {
  const style = SIZE_PROPERTIES[activeSize];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { startDrawing, draw, endDrawing, startPoint, endPoint } =
    useLineDrawer({
      canvasRef,
    });

  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => {
    draw(e);

    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    // Restore lines
    lines.forEach(({ startX, startY, endX, endY }) =>
      drawLine(context, startX, startY, endX, endY),
    );
  };

  const mouseEndHandler = () => {
    endDrawing();
    if (startPoint?.x && endPoint?.x) {
      addLine({
        startX: startPoint.x,
        startY: startPoint!.y,
        endX: endPoint!.x,
        endY: endPoint!.y,
      });
    }
  };

  return (
    <canvas
      data-testid="drawer"
      ref={canvasRef}
      width={INTERNAL_CANVAS_WIDTH}
      height={INTERNAL_CANVAS_HEIGHT}
      onMouseMove={mouseMoveHandler}
      className="drawer"
      onMouseDown={startDrawing}
      onMouseUp={mouseEndHandler}
      onMouseOut={mouseEndHandler}
      style={style}
    />
  );
};

export default Drawer;
