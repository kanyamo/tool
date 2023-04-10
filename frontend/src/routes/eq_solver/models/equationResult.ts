import { Fraction } from "./fraction";

export interface EquationResult {
  solution: Fraction[];
  hasSolution: boolean;
  solved: boolean;
}
