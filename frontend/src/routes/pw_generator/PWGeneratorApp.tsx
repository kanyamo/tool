import React, { useRef, useState } from 'react';
import { Switch, FormControlLabel, FormGroup, Button, Slider } from '@mui/material';
import PasswordList from './components/PasswordList';

const PWGeneratorApp : React.FC = () => {
  const [passwords, setPasswords] = useState<string[]>([]);
  const [includesNum, setIncludesNum] = useState(true);
  const [includesUpper, setIncludesUpper] = useState(true);
  const [includesSymbol, setIncludesSymbol] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const countRef = useRef<HTMLInputElement>(null);

  const generatePasswords = (count: number, includes_num: boolean, includes_upper: boolean, includes_symbol: boolean, length: number) => {
    // パスワード生成用の文字セットを定義する
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includes_num) {
      charset += "0123456789";
    }
    if (includes_upper) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includes_symbol) {
      charset += "!@#$%^&*()_+-=[]{}|;':\"<>,./?";
    }
  
    // count個のパスワードを生成する
    const passwords: string[] = [];
    for (let i = 0; i < count; i++) {
      let password = "";
      for (let j = 0; j < length; j++) {
        password += charset[Math.floor(Math.random() * charset.length)];
      }
      passwords.push(password);
    }
    return passwords;
  }

  const handleGeneratePasswords = (e: React.MouseEvent<HTMLButtonElement>) => {
    const count = Number(countRef.current!.value);
    const newPasswords = generatePasswords(count, includesNum, includesUpper, includesSymbol, passwordLength);
    setPasswords(newPasswords);
  }

  return (
    <div>
      <h2>Password Generator</h2>
      <p>ランダムなパスワードを生成します。</p>
      <label htmlFor="id_count">
        生成個数：
      </label>
      <input type="number" id="id_count" defaultValue="1" ref={countRef}></input>

      <FormGroup>
        <FormControlLabel
          control={
            <Switch
            checked={includesNum}
            onChange={() => {
              setIncludesNum(!includesNum);
            }}
              name="includes_num"
            />
          }
          label="数字を含める"
        />
        <FormControlLabel
          control={
            <Switch
            checked={includesUpper}
            onChange={() => {
              setIncludesUpper(!includesUpper);
            }}
              name="includes_upper"
            />
          }
          label="大文字を含める"
        />
        <FormControlLabel
          control={
            <Switch
            checked={includesSymbol}
            onChange={() => {
              setIncludesSymbol(!includesSymbol);
            }}
              name="includes_symbol"
            />
          }
          label="記号を含める"
        />
        パスワードの長さ
        <Slider
          aria-label="パスワードの長さ"
          value={passwordLength}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={32}
          onChange={(event: any, newValue: number | number[]) => {
              if (typeof newValue === "number") {
                setPasswordLength(newValue);
              }
            }
          }
        />
      </FormGroup>
      <Button variant="contained" onClick={handleGeneratePasswords}>生成する</Button>
      <PasswordList passwords={ passwords }></PasswordList>
    </div>
  );
}

export default PWGeneratorApp;