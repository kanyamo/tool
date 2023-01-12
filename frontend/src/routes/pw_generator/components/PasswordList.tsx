import React from "react";
import Password from "./Password";
import {v4 as uuidv4} from "uuid";

type PasswordListProps = {
  passwords: Array<string>
}

const PasswordList : React.FC<PasswordListProps> = ({ passwords }) => {
  if (passwords.length === 0) {
    return null;
  } else {
    return (
      <section>
        <h2>生成結果</h2>
        <ul className='password-list'>
          {passwords.map((password) => 
            <li key={uuidv4()}>
              <Password password={ password }></Password>
            </li>
          )}
        </ul>
      </section>
    );
  }
};

export default PasswordList;