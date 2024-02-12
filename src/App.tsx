import React, { useState } from "react";
import Control from "./components/Control";
import { Size } from "./constants/sizes";
import Drawer from "./components/Drawer";
import { Line } from "./types/line";
import Lines from "./components/Lines";
import { useList } from "./hooks/useList/useList";

function App() {
  const [size, setSize] = useState<Size>(Size.Small);

  const { list, add } = useList<Line>();

  return (
    <div className="App">
      <Control activeSize={size} setSize={setSize} />
      <Drawer activeSize={size} addLine={add} lines={list} />
      <Lines lines={list} />
    </div>
  );
}

export default App;
