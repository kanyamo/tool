import { Fraction } from "./fraction";
import { Term } from "./term";

type Substitution = {
  variable: string;
  value: Fraction;
}

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

  substitute(substitutions: Substitution[]): Fraction {
    return this.terms.reduce((sum, term) => {
      const substitution = substitutions.find((substitution) => substitution.variable === term.variable);
      if (substitution) {
        return sum.add(term.substitute(substitution.value));
      } else {
        console.warn("Substitution not found for variable " + term.variable);
        return sum.add(term.substitute(new Fraction(0, 1)));
      }
    }, new Fraction(0, 1));
  }
}


