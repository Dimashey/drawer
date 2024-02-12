import React from "react";
import { Props } from "./types";
import { round } from "./utils";

import "./Lines.css";

const Lines: React.FC<Props> = ({ lines }) => (
  <div data-testid="lines" className="lines">
    {lines.map(({ startX, startY, endX, endY }, index) => (
      <div key={index}>
        Line {index + 1} - points [{round(startX)}, {round(startY)},{" "}
        {round(endX)}, {round(endY)}]
      </div>
    ))}
  </div>
);

export default Lines;
