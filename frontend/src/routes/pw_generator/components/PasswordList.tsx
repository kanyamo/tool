import React from "react";
import Password from "./Password";
import {v4 as uuidv4} from "uuid";

type PasswordListProps = {
  passwords: Array<string>
}

const PasswordList : React.FC<PasswordListProps> = ({ passwords }) => {
  return (
    <ul>
      {passwords.map((password) => 
        <li key={uuidv4()}>
          <Password password={ password }></Password>
        </li>
      )}
    </ul>
  );
};

export default PasswordList;