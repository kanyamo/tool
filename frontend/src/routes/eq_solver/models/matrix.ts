import { Fraction } from "./fraction";
import { FixedLengthArray } from "../models/fixedLengthArray";

export class Matrix {
  public data: Fraction[][];

  constructor(data: Fraction[][]) {
    this.data = data.map(row => row.slice());
  }

  get numRows(): number {
    return this.data.length;
  }

  get numCols(): number {
    return this.data[0].length;
  }

  get(row: number, col: number): Fraction {
    return this.data[row][col];
  }

  set(row: number, col: number, value: Fraction): void {
    this.data[row][col] = value;
  }

  swapRows(row1: number, row2: number): void {
    [this.data[row1], this.data[row2]] = [this.data[row2], this.data[row1]];
  }

  toString(): string {
    return this.data.map(row => row.join(" ")).join("\n");
  }

  // 上三角行列に対して後退代入を行って解を求める
  backSubstitution(): Fraction[] {
    const solution: Fraction[] = Array(this.numRows).fill(new Fraction(0, 1));
    for (let row = this.numRows - 1; row >= 0; row--) {
      let sum = new Fraction(0, 1);
      for (let col = row + 1; col < this.numCols - 1; col++) {
        sum = sum.add(this.get(row, col).multiply(solution[col]));
      }
      solution[row] = (this.get(row, this.numCols - 1).subtract(sum)).divide(this.get(row, row));
    }
    return solution;
  }

  static fromStrings(values: FixedLengthArray<FixedLengthArray<string, number>, number>): Matrix {
    return new Matrix(values.map(row => row.map(value => new Fraction(value ? parseFloat(value): 0, 1))));
  }
  
}

export enum TransformationType {
  SWAP = "swap",
  MULTIPLY = "multiply",
  ADD = "add",
}
