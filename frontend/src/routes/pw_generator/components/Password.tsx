import React from 'react';

type PasswordProps = {
  password: string,
};

const Password: React.FC<PasswordProps> = ({password}) => {
  return (
    <span>{ password }</span>
  )
}

export default Password;