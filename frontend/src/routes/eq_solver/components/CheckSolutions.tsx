import React from 'react'
import { Fraction } from '../models/fraction';
import { Matrix } from '../models/matrix';
import { Polynomial } from '../models/polynomial';
import { Term } from '../models/term';
import { generateVariables } from '../utils/generate_variables';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

// 連立方程式の検算をするためのコンポーネント
type CheckSolutionsProps = {
  // 連立方程式の係数行列
  matrix: Matrix;
  // 連立方程式の解
  solutions: Fraction[];
}


const CheckSolutions: React.FC<CheckSolutionsProps> = ({ matrix, solutions }) => {
  const dim = matrix.numRows;
  const variables = generateVariables(dim);
  return (
    <section>
      <Accordion>
        <AccordionSummary>
          検算
        </AccordionSummary>
        <AccordionDetails>
          {matrix.data.map((row, index) => {
            const expected = row[row.length - 1];
            const polynomial = new Polynomial(row.slice(0, dim).map((value, index) => {
              return new Term(value, variables[index], 1);
            }));
            const actual = polynomial.substitute(solutions.map((value, index) => {
              return {
                variable: variables[index],
                value: value,
              }
            }));
            const result = actual.equals(expected);
            return (
              <div key={index}>
                <p>第{index + 1}式の検算: {result ? 'OK' : 'NG'}</p>
                想定される値: {expected.toLatex()}<br />
                代入結果: {actual.toLatex()}<br />
                
              </div>
            )
          })}
        </AccordionDetails>
      </Accordion>
    </section>
  )
}

export default CheckSolutions
