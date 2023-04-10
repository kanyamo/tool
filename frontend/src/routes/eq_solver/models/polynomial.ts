import { Term } from "./term";
export class Polynomial {
  terms: Term[];
  constructor(terms: Term[]) {
    this.terms = terms;
  }
  toLatex(): string {
    let latex = "";
    for (let i = 0; i < this.terms.length; i++) {
      const conditions: boolean[] = this.terms.slice(0, i).map((term) => term.isZero());
      latex += this.terms[i].toLatex(conditions.every((condition) => condition));
    }
    if (latex === "") {
      latex = "0";
    }
    return latex;
  }
}
