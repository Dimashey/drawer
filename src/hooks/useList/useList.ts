import { useState } from "react";
import { Return } from "./types";

export const useList = <T>(): Return<T> => {
  const [list, setList] = useState<T[]>([]);

  const add = (element: T) => setList((elements) => [...elements, element]);

  return {
    list,
    add,
  };
};
