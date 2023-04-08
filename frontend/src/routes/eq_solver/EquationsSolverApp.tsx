import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Fraction } from './models/fraction';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface EquationResult {
    text: string;
    isMath: boolean;
}

const EquationsSolverApp: React.FC = () => {
  const initialValues = [
    ['', ''],
    ['', ''],
    ['', '']
  ];

  const [values, setValues] = useState(initialValues);
  const [result, setResult] = useState<EquationResult>({text: '', isMath: false});

  const handleChange = (row: number, col: number, value: string) => {
    const updatedValues = [...values];
    updatedValues[row][col] = value;
    setValues(updatedValues);
  };

  const solveEquations = () => {
    const a = new Fraction(values[0][0] ? parseFloat(values[0][0]) : 0, 1);
    const b = new Fraction(values[0][1] ? parseFloat(values[0][1]) : 0, 1);
    const c = new Fraction(values[1][0] ? parseFloat(values[1][0]) : 0, 1);
    const d = new Fraction(values[1][1] ? parseFloat(values[1][1]) : 0, 1);
    const e = new Fraction(values[2][0] ? parseFloat(values[2][0]) : 0, 1);
    const f = new Fraction(values[2][1] ? parseFloat(values[2][1]) : 0, 1);

    const det = a.multiply(e).subtract(b.multiply(d));

    if (det.numerator === 0) {
      setResult({text: '解が存在しないか、一意でない場合があります。', isMath: false});
    } else {
      const x = (c.multiply(e).subtract(b.multiply(f))).divide(det);
      const y = (a.multiply(f).subtract(c.multiply(d))).divide(det);
      setResult({text: `x = ${x.toMath()},\\; y = ${y.toMath()}`, isMath: true});
    }
  };

  return (
    <div>
      <h1>
        連立方程式ソルバー
      </h1>
      <Grid container spacing={2}>
        {values.map((row, rowIndex) => (
          row.map((colValue, colIndex) => (
            <Grid item key={`row${rowIndex}-col${colIndex}`} xs={4}>
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
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={solveEquations}>
            ソルバーを実行
          </Button>
        </Grid>
        <Grid item xs={12}>
          {result && result.isMath ? <InlineMath math={result.text} /> : result.text}
        </Grid>
      </Grid>
      <h2>
        使い方
      </h2>
      <p>
        整数の連立方程式を簡単に特くツールです。連立方程式の係数を入力して「ソルバーを実行」ボタンを押すと、解が分数で表示されます。
      </p>
      <p>
        何も入力しない場合は、0として扱われます。
      </p>
      <p>
        現在整数の入力にのみ対応しています。また、2次元の連立方程式のみ対応しています。
      </p>
    </div>
  );
};

export default EquationsSolverApp;
