import React from "react";
import "./Control.css";
import { SIZES_NAMES } from "../../constants/sizes";
import { Props } from "./types";

const Control: React.FC<Props> = ({ activeSize, setSize }) => {
  return (
    <div className="control" data-testid="control">
      {SIZES_NAMES.map((size) => (
        <button
          key={size}
          disabled={activeSize === size}
          onClick={() => setSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default Control;
