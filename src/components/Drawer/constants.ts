import { Size } from "../../constants/sizes";
import { CSSProperties } from "react";

export const SIZE_PROPERTIES: Record<Size, CSSProperties> = {
  [Size.Small]: { width: 300, height: 200 },
  [Size.Medium]: { width: 600, height: 400 },
  [Size.Large]: { width: 900, height: 600 },
};

export const INTERNAL_CANVAS_WIDTH = 1200;
export const INTERNAL_CANVAS_HEIGHT = 800;
