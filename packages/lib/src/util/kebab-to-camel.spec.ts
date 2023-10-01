import { describe, it, expect } from "vitest";
import { kebabToCamelCase } from "./kebab-to-camel-case";

describe("kebabToCamelCase", () => {
  it("test", () => {
    expect(kebabToCamelCase("darth-vader")).toEqual("darthVader");
    expect(kebabToCamelCase("may-the-force")).toEqual("mayTheForce");
  });
});
