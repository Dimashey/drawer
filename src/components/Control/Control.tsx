import React from "react";
import "./Control.css";
import { LINES_TYPES_NAMES, SIZES_NAMES } from "../../constants/sizes";
import { Props } from "./types";

const Control: React.FC<Props> = ({
  activeSize,
  setSize,
  activeType,
  setType,
}) => (
  <div className="control" data-testid="control">
    <div>
      {SIZES_NAMES.map((size) => (
        <button
          key={size}
          disabled={activeSize === size}
          onClick={() => setSize(size)}
          className="control__button control__button--size"
        >
          {size}
        </button>
      ))}
    </div>
    <div>
      {LINES_TYPES_NAMES.map((type) => (
        <button
          disabled={activeType === type}
          onClick={() => setType(type)}
          key={type}
          className="control__button control__button"
        >
          {type}
        </button>
      ))}
    </div>
  </div>
);

export default Control;
