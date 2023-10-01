import { capitalize } from "./capitalize";

export const kebabToCamelCase = (value: string) => {
  const values = value.split("-");
  const result = [values[0]];
  for (let index = 1; index < values.length; index++) {
    result.push(capitalize(values[index]));
  }
  return result.join("");
};
