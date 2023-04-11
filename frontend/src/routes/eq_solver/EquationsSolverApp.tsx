import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';
import { Matrix, TransformationType } from './models/matrix';
import TransformList from './components/TransformList';
import { performSingleTransformation } from './utils/perform_single_transformation';
import { EquationResult } from './models/equationResult';
import CheckSolutions from './components/CheckSolutions';
import Result from './components/Result';
import RenderMatrix from './components/RenderMatrix';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const EquationsSolverApp: React.FC = () => {

  const [dimension, setDimension] = useState(2);

  const handleDecrementDimension = () => {
    if (dimension > 1) {
      setDimension(dimension - 1);
    }
  };

  const handleIncrementDimension = () => {
    setDimension(dimension + 1);
  };

  const initialValues = Array(dimension).fill(0).map(() => Array(dimension + 1).fill(''));
  useEffect(() => {
    resetValues();
    console.log(`Dimension changed to ${dimension}x${dimension + 1}.`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimension]);

  const [values, setValues] = useState(initialValues);
  const [transforms, setTransforms] = useState<Matrix[]>([]);
  const [result, setResult] = useState<EquationResult>({solution: [], hasSolution: false, solved: false});

  const handleChange = (row: number, col: number, value: string) => {
    const updatedValues = [...values];
    updatedValues[row][col] = value;
    setValues(updatedValues);
  };

  const resetValues = () => {
    setValues(initialValues);
    setResult({solution: [], hasSolution: false, solved: false});
    setTransforms([]);
  };

  const solveEquations = () => {
    setTransforms([]);
    let matrix = Matrix.fromStrings(values);
    const numRows = matrix.numRows;
    try {
      let step = 0;
      while (step < numRows) {  
        const [ transformedMatrix, transformationType ] = performSingleTransformation(matrix, step);
        matrix = transformedMatrix;
        console.log(`Step ${step + 1}, transformation: ${transformationType}`);
        console.log(transformedMatrix);
        setTransforms((prevTransforms) => [...prevTransforms, transformedMatrix]);
        if (transformationType !== TransformationType.SWAP) {
          step++;
        }
      }
      const solution = matrix.backSubstitution();
      console.log("Solution:", solution);
      setResult({hasSolution: true, solution, solved: true});
    } catch (e) {
      console.log(e);
      setResult({hasSolution: false, solution: [], solved: true});
      return;
    }
  };

  return (
    <div>
      <h1>
        連立方程式ソルバー
      </h1>
      <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Button variant="outlined" color="primary" onClick={handleDecrementDimension}>
          -
        </Button>
        <span>
          元の個数: {dimension}
        </span>
        <Button variant="outlined" color="primary" onClick={handleIncrementDimension}>
          +
        </Button>
      </Container>
      <p>
        解きたい方程式の拡大係数行列を入力してください。
      </p>
      <Grid container spacing={2}>
        {values.map((row, rowIndex) => (
          row.map((colValue, colIndex) => (
            <Grid item key={`row${rowIndex}-col${colIndex}`} xs={12 / (dimension + 1)}>
              <TextField
                label={`値 (${rowIndex + 1}, ${colIndex + 1})`}
                value={colValue}
                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                type="number"
                fullWidth
                />
            </Grid>
          ))
        ))}
      </Grid>
      <section>
        <h3>
          プレビュー
        </h3>
        <RenderMatrix matrix={Matrix.fromStrings(values)} />
      </section>
        <Container sx={{padding: 0, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Button variant="contained" color="primary" onClick={solveEquations}>
            この方程式を解く
          </Button>
          <Button variant="contained" color="primary" onClick={resetValues}>
            係数をリセット
          </Button>
        </Container>
      <section>
        <Result result={result} />
        <TransformList transforms={transforms} />
        {result.solved && result.hasSolution && 
          <CheckSolutions matrix={Matrix.fromStrings(values)} solutions={result.solution} />
        }
      </section>
      <h2>
        使い方
      </h2>
      <p>
        整数係数の<InlineMath math="n"></InlineMath>元連立方程式を簡単に解くツールです。連立方程式の係数を入力して「この方程式を解く」ボタンを押すと、解と途中式が分数で表示されます。
      </p>
      <p>
        何も入力しない場合は、0として扱われます。
      </p>
    </div>
  );
};

export default EquationsSolverApp;
