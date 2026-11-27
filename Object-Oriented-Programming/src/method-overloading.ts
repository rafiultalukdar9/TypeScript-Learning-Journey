class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  add(a: number | string, b: number | string): number | string {
    return typeof a === "number" && typeof b === "number"
      ? a + b
      : String(a) + String(b);
  }
}

const calc = new Calculator();

console.log(calc.add(10, 20));
console.log(calc.add("Hello ", "World"));