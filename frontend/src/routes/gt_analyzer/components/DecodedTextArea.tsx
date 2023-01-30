import React from 'react';
import decodedTextAreaProps from '../models/decodedTextAreaProps';

const DecodedTextArea: React.FC<decodedTextAreaProps> = ({ text, encoding }) => {
  if (text !== "") {
    return (
      <div>
        <h2>解析された文章</h2>
        <div>
          <p>{text}</p>
        </div>
        <p>元の文字列のエンコーディングは{encoding}です</p>
      </div>
    )
  } else {
    return null;
  }
}

export default DecodedTextArea