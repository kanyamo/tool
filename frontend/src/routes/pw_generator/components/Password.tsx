import React, { useRef } from 'react';
import Button from '@mui/material/Button';

type PasswordProps = {
  password: string,
};

const Password: React.FC<PasswordProps> = ({password}) => {
  const passwordRef = useRef<HTMLSpanElement>(null);

  const handleCopyPassword = () => {
    if (passwordRef.current !== null) {
      // パスワードを選択する
      navigator.clipboard.writeText(passwordRef.current.innerText);
    }
  }

  return (
    <div>
      <span ref={passwordRef}>
        { password }
      </span>
      <Button variant="contained" onClick={handleCopyPassword}>コピー</Button>
    </div>
  )
}

export default Password;
