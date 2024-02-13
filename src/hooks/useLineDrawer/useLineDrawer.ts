import React, { useRef, useState } from "react";
import { Coordinates } from "../../components/Drawer/type";
import { Params, Return } from "./types";
import { LineDrawer } from "../../services/drawer/line";
import { DirectLineDrawer } from "../../services/drawer/direct-line";
import { LineType } from "../../constants/sizes";
import { ParallelLineDrawer } from "../../services/drawer/parallel-line";

const useLineDrawer = ({ canvasRef, lineType }: Params): Return => {
  const [startPoint, setStartPoint] = useState<Coordinates | null>(null);
  const [endPoint, setEndPoint] = useState<Coordinates | null>(null);
  const drawerRef = useRef<LineDrawer | null>(null);

  const getDrawer = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => {
    if (lineType === LineType.Parallel) {
      return new ParallelLineDrawer(canvas, context);
    }

    return new DirectLineDrawer(canvas, context);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawer = getDrawer(canvas, ctx);

    drawerRef.current = drawer;

    const coordinates = drawer.setStartMousePosition(e);

    setStartPoint(coordinates);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const drawer = drawerRef.current;

    if (!drawer) return;

    const coordinates = drawer.draw(e);

    setEndPoint(coordinates);
  };

  const endDrawing = () => {
    drawerRef.current = null;
    setStartPoint(null);
  };

  return { startDrawing, draw, endDrawing, startPoint, endPoint };
};

export default useLineDrawer;
