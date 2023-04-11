import { Fraction } from "./fraction";

export class Term {
  coefficient: Fraction;
  variable: string;
  exponent: number;

  constructor(coefficient: Fraction, variable: string, exponent: number) {
    this.coefficient = coefficient;
    this.variable = variable;
    this.exponent = exponent;
  }

  toLatex(isFirst: boolean): string {
    let latex = "";
    if (this.coefficient.toNumber() !== 0) {
      if (isFirst) {
        if (this.coefficient.toNumber() < 0) {
          latex += "-";
        }
      } else {
        if (this.coefficient.toNumber() > 0) {
          latex += "+";
        } else {
          latex += "-";
        }
      }
      if (this.coefficient.toNumber() !== 1 && this.coefficient.toNumber() !== -1) {
        latex += this.coefficient.abs().toLatex();
      }
      latex += this.variable;
      if (this.exponent !== 1 && this.variable !== "") {
        latex += "^{" + this.exponent + "}";
      }
    }
    return latex;
  }

  isZero(): boolean {
    return this.coefficient.toNumber() === 0;
  }

  substitute(value: Fraction): Fraction {
    return this.coefficient.multiply(value.power(this.exponent));
  }
}
