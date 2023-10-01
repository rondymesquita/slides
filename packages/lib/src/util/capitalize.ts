export const capitalize = (value: string) => {
  const values = value.split("");
  const first = values.shift();
  const result = [first!.toUpperCase(), ...values];
  return result.join("");
};
