import React, { useRef, useState } from 'react';
import PasswordList from './components/PasswordList';

const PWGeneratorApp : React.FC = () => {
  const [passwords, setPasswords] = useState<string[]>([]);

  const numericRef = useRef<HTMLInputElement>(null);
  const upperRef = useRef<HTMLInputElement>(null);
  const symbolicRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);

  const generatePasswords = (count: number, includes_num: boolean, includes_upper: boolean, includes_symbol: boolean) => {
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
      for (let j = 0; j < 8; j++) {
        password += charset[Math.floor(Math.random() * charset.length)];
      }
      passwords.push(password);
    }
    return passwords;
  }

  const handleGeneratePasswords = (e: React.MouseEvent<HTMLButtonElement>) => {
    const includes_num = numericRef.current!.checked;
    const includes_upper = upperRef.current!.checked;
    const includes_symbol = symbolicRef.current!.checked;
    const count = Number(countRef.current!.value);
    const newPasswords = generatePasswords(count, includes_num, includes_upper, includes_symbol);
    setPasswords(newPasswords);
  }

  return (
    <div>
      <h2>Password Generator</h2>
      <p>パスワードを生成します。</p>
      <label htmlFor="id_numeric_checkbox">
        数字を含める：
      </label>
      <input type="checkbox" id="id_numeric_checkbox" ref={numericRef}></input><br />
      <label htmlFor="id_upper_checkbox">
        大文字を含める：
      </label>
      <input type="checkbox" id="id_upper_checkbox" ref={upperRef}></input><br />
      <label htmlFor="id_symbolic_checkbox">
        記号を含める：
      </label>
      <input type="checkbox" id="id_symbolic_checkbox" ref={symbolicRef}></input><br />
      <label htmlFor="id_count">
        生成個数：
      </label>
      <input type="number" id="id_count" defaultValue="1" ref={countRef}></input>
      <button onClick={handleGeneratePasswords}>生成する</button>
      <PasswordList passwords={ passwords }></PasswordList>
    </div>
  );
}

export default PWGeneratorApp;