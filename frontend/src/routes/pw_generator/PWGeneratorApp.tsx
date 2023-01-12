import React, { useRef, useState } from 'react';
import { Switch, FormGroup, Button, Slider } from '@mui/material';
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
    <div className='pw-generator-app'>
      <h1>Password Generator</h1>
      <FormGroup>
        <div className='control-group-item'>
          <label htmlFor="id_count">
            生成個数
          </label>
          <input className="count-input" type="number" id="id_count" defaultValue="5" ref={countRef}></input>
        </div>
        <div className='control-group-item'>
          <span>
            数字を含める
          </span>
          <Switch
            checked={includesNum}
            onChange={() => {
              setIncludesNum(!includesNum);
            }}
            name="includes_num"
          />
        </div>
        <div className='control-group-item'>
          <span>
            大文字を含める
          </span>
          <Switch
            checked={includesUpper}
            onChange={() => {
              setIncludesUpper(!includesUpper);
            }}
            name="includes_upper"
          />
        </div>
        <div className='control-group-item'>
          <span>
            記号を含める
          </span>
          <Switch
            checked={includesSymbol}
            onChange={() => {
              setIncludesSymbol(!includesSymbol);
            }}
              name="includes_symbol"
            />
        </div>
        <div className='control-group-item password-length'>
          <span className="password-length-title">
            パスワードの長さ
          </span>
          <div className='slider-container'>
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
          </div>
        </div>
      </FormGroup>
      <div className='generate-button-container'>
        <Button variant="contained" onClick={handleGeneratePasswords}>生成する</Button>
      </div>
      <PasswordList passwords={ passwords }></PasswordList>
      <section>
        <h2>
          使い方
        </h2>
        <p>ランダムなパスワードを生成します。</p>
        <p>各スイッチを切り替えることで、生成されるパスワードの特徴をカスタマイズすることができます。</p>
        <p>生成されたパスワードはそのままコピーできます。新規会員登録時などにどうぞ。</p>
        <p>このアプリは完全にローカルで完結しており、生成されたパスワードに関する一切の情報は通信されていないので安全です。</p>
      </section>
    </div>
  );
}

export default PWGeneratorApp;