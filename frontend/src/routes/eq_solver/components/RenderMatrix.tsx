import React from 'react';
import { Matrix } from '../models/matrix';
import { BlockMath } from 'react-katex';
import { Polynomial } from '../models/polynomial';
import { Term } from '../models/term';
import { generateVariables } from '../utils/generate_variables';
import { Fraction } from '../models/fraction';

type RenderMatrixProps = {
  matrix: Matrix;
}

const RenderMatrix: React.FC<RenderMatrixProps> = ({matrix}) => {
  /**
   * 
   * @param row 文字列で拡大係数行列の行を表す
   * @returns 整形されたLaTeX数式。例: 2x + 3y &= 4
   */
  const formatEquation = (row: Fraction[]): string => {
    const dim = row.length - 1;
    const variables = generateVariables(dim);

    const polynomial = new Polynomial(
      row.slice(0, dim).map((value, index) => new Term(value, variables[index], 1))
    );

    return `${polynomial.toLatex()} &= ${row[dim].toLatex()} \\\\`;
  };

  const equations = matrix.data.map(formatEquation).join('');

  const latexCode = `
    \\begin{align*}
      \\left\\{
        \\begin{aligned}
          ${equations}
        \\end{aligned}
      \\right.
    \\end{align*}
  `;

  return (
    <BlockMath math={latexCode} />
  );
}

export default RenderMatrix
