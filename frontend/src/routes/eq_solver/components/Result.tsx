import React from 'react';
import { EquationResult } from '../models/equationResult';
import { generateVariables } from '../utils/generate_variables';
import { BlockMath } from 'react-katex';

type ResultProps = {
  result: EquationResult
}

const Result: React.FC<ResultProps> = ({result}) => {
  if (!result.solved) {
    return null
  }
  if (result.hasSolution) {

    const solution = result.solution;
    const variables = generateVariables(solution.length);
    const latexCode = solution.map((value, index) => `${variables[index]} = ${value.toLatex()}`).join(',\\; ');

    return (
      <div>
        <h3>
          解
        </h3>
        <p>解は</p>
        <BlockMath math={latexCode} />
        <p>です。以下に途中式を示します。</p>
      </div>
    )
  } else {
    return (
      <div>
        <h3>
          解
        </h3>
        <p>解は存在しないか、一意的ではありません。</p>
      </div>
    )
  }
}

export default Result
