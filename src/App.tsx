import React, { useState } from "react";
import Control from "./components/Control";
import { Size } from "./constants/sizes";
import Drawer from "./components/Drawer";
import { Line } from "./types/line";
import Lines from "./components/Lines";
import { useList } from "./hooks/useList/useList";
import "./App.css";

function App() {
  const [size, setSize] = useState<Size>(Size.Small);

  const { list, add } = useList<Line>();

  return (
    <div className="app">
      <div className="app__control">
        <Control activeSize={size} setSize={setSize} />
      </div>
      <div>
        <Drawer activeSize={size} addLine={add} lines={list} />
      </div>
      <div>
        <Lines lines={list} />
      </div>
    </div>
  );
}

export default App;
