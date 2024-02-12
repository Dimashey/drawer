import { round } from "./utils";

describe("round", () => {
  it("should round values to two decimals", () => {
    expect(round(50)).toEqual(50.0);
    expect(round(50.123123412412)).toEqual(50.12);
  });
});
