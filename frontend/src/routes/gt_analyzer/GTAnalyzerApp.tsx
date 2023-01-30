import React, { useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';
import DecodedTextArea from './components/DecodedTextArea';
import convertEncoding from './utils/convert_encoding';

const GTAnalyzerApp : React.FC = () => {
  const [encodedText, setEncodedText] = useState<string>('');
  const [encoding, setEncoding] = useState<string>('UTF8');
  const inputTextRef = useRef<HTMLInputElement>(null);

  const handleAnalyzeText = () => {
    const text = inputTextRef.current!.value;
    if (text === "") return;
    setEncoding('UTF8');
    setEncodedText(convertEncoding(text, 'SJIS', 'UTF8'));
  }

  return (
    <div className="gt-analyzer-app">
      <h1>文字化け解析ツール</h1>
      <TextField
        label="解析したい文章"
        inputRef={inputTextRef}
        fullWidth
        variant='outlined'
        multiline
        rows={6}
        placeholder="縺薙?荳也阜縺ｯ縲∝?縺ｨ髣??"
      ></TextField>
      <Button
        variant="contained"
        onClick={handleAnalyzeText}
      >
        解析する
      </Button>
      <DecodedTextArea text={encodedText} encoding = {encoding}></DecodedTextArea>
      <h2>
        使い方
      </h2>
      <p>
        よくある文字化けを解析するツールです。文字化けした文章をペーストして「解析する」ボタンを押すと変換された文章が表示されます。
      </p>
      <p>
        現在Shift-JISとUTF-8の間の変換にのみ対応しています。また、変換の際に文字が欠損するので完全に復元することはできません。
      </p>
    </div>
  )
}

export default GTAnalyzerApp