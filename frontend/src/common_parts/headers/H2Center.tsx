import React,{ ReactNode } from 'react';

type H2CenterProps = {
    children: ReactNode,
};

const H2Center : React.FC<H2CenterProps> = ({children}) => {
  return (
    <h2 className="center">
      <span>
        {children}
      </span>
    </h2>
  )
}

export default H2Center