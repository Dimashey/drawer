import React, { useState } from "react";
import { Coordinates } from "../../components/Drawer/type";
import { drawLine, getMousePosition } from "./utils";
import { Params, Return } from "./types";

const useLineDrawer = ({ canvasRef }: Params): Return => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [startPoint, setStartPoint] = useState<Coordinates | null>(null);
  const [endPoint, setEndPoint] = useState<Coordinates | null>(null);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { x, y } = getMousePosition(e, canvas);
    setStartPoint({ x, y });
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing || !startPoint) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { x, y } = getMousePosition(e, canvas);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    drawLine(ctx, startPoint.x, startPoint.y, x, y);

    setEndPoint({ x, y });
  };

  const endDrawing = () => {
    setIsDrawing(false);
    setStartPoint(null);
  };

  return { startDrawing, draw, endDrawing, startPoint, endPoint };
};

export default useLineDrawer;
