import { describe, it, expect } from "vitest";
import { capitalize } from "./capitalize";

describe("capitalize", () => {
  it("capitalize", () => {
    expect(capitalize("darthvader")).toEqual("Darthvader");
    expect(capitalize("darthVader")).toEqual("DarthVader");
  });
});
