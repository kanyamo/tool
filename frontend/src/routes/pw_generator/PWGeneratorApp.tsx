import React, { useRef, useState } from 'react';
import PasswordList from './components/PasswordList';

const PWGeneratorApp : React.FC = () => {
  const [passwords, setPasswords] = useState<string[]>([]);

  const numericRef = useRef<HTMLInputElement>(null);
  const upperRef = useRef<HTMLInputElement>(null);
  const symbolicRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);

  // フロントエンドの設定でバックエンドにリクエストを送り、バックエンドからパスワードを持ってくる関数
  const fetchPasswords = (count: number, includes_num: boolean, includes_upper: boolean, includes_symbol: boolean) => {
    return Array(count).fill("test_pass");
  }

  const handleGeneratePasswords = (e: React.MouseEvent<HTMLButtonElement>) => {
    const includes_num = numericRef.current!.checked;
    const includes_upper = upperRef.current!.checked;
    const includes_symbol = symbolicRef.current!.checked;
    const count = countRef.current!.value;
    const newPasswords = fetchPasswords(2, includes_num, includes_upper, includes_symbol);
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