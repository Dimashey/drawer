import { act, renderHook } from "@testing-library/react";
import { useList } from "./useList";

const hook = () => renderHook(() => useList<number>());

describe("useList", () => {
  it("should handle add element", () => {
    const { result } = hook();

    expect(result.current.list).toEqual([]);

    act(() => {
      result.current.add(1);
    });

    expect(result.current.list).toEqual([1]);
  });
});
