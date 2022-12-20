import React, { useRef } from 'react';

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
      <button onClick={handleCopyPassword}>コピー</button>
    </div>
  )
}

export default Password;
