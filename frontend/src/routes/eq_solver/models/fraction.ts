export class Fraction {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator must not be 0");
    }
    this.numerator = numerator;
    this.denominator = denominator;
    this.reduce();
  }

  private gcd(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return this.gcd(b, a % b);
  }

  private reduce(): void {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator /= gcd;
    this.denominator /= gcd;
    if (this.denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }
  }

  add(fraction: Fraction): Fraction {
    const numerator =
      this.numerator * fraction.denominator + fraction.numerator * this.denominator;
    const denominator = this.denominator * fraction.denominator;
    return new Fraction(numerator, denominator);
  }

  subtract(fraction: Fraction): Fraction {
    const numerator =
      this.numerator * fraction.denominator - fraction.numerator * this.denominator;
    const denominator = this.denominator * fraction.denominator;
    return new Fraction(numerator, denominator);
  }

  multiply(fraction: Fraction): Fraction {
    const numerator = this.numerator * fraction.numerator;
    const denominator = this.denominator * fraction.denominator;
    return new Fraction(numerator, denominator);
  }

  divide(fraction: Fraction): Fraction {
    if (fraction.numerator === 0) {
      throw new Error("Cannot divide by zero");
    }
    const numerator = this.numerator * fraction.denominator;
    const denominator = this.denominator * fraction.numerator;
    return new Fraction(numerator, denominator);
  }

  toString(): string {
    if (this.denominator === 1) {
      return `${this.numerator}`;
    }
    return `${this.numerator}/${this.denominator}`;
  }

  toMath(): string {
    if (this.denominator === 1) {
      return `${this.numerator}`;
    } else if (this.numerator < 0) {
      return `-\\dfrac{${-this.numerator}}{${this.denominator}}`;
    }
    return `\\dfrac{${this.numerator}}{${this.denominator}}`;
  }
}
