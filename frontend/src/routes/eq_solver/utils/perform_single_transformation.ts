import { Matrix, TransformationType } from '../models/matrix';

export function performSingleTransformation(matrix: Matrix, step: number): [Matrix, TransformationType] {
  const numRows = matrix.numRows;
  const numCols = matrix.numCols;
  const transformedMatrix = new Matrix(matrix.data.map(row => row.slice()));

  if (matrix.get(step, step).toNumber() === 0) {
    let rowSwap = -1;
    for (let j = step + 1; j < numRows; j++) {
      if (matrix.get(j, step).toNumber() !== 0) {
        rowSwap = j;
        break;
      }
    }

    if (rowSwap === -1) {
      throw new Error("No unique solution.");
    }
    transformedMatrix.swapRows(step, rowSwap);
    return [transformedMatrix, TransformationType.SWAP];
  }

  if (step < numRows - 1) {
    const pivot = transformedMatrix.get(step, step);
    for (let j = step; j < numCols; j++) {
      transformedMatrix.set(step, j, transformedMatrix.get(step, j).divide(pivot));
    }
    
    for (let i = step + 1; i < numRows; i++) {
      const factor = transformedMatrix.get(i, step);
      for (let k = step; k < numCols; k++) {
        const res = transformedMatrix.get(i, k).subtract(transformedMatrix.get(step, k).multiply(factor));
        transformedMatrix.set(i, k, res);
      }
    }
    return [transformedMatrix, TransformationType.ADD];
  } else {
    const pivot = transformedMatrix.get(step, step);
    for (let j = step; j < numCols; j++) {
      const res = transformedMatrix.get(step, j).divide(pivot);
      transformedMatrix.set(step, j, res);
    }
    return [transformedMatrix, TransformationType.MULTIPLY];
  }
}
