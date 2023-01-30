import Encoding from 'encoding-japanese';

const convertEncoding = (text: string, fromEncoding: Encoding.Encoding, toEncoding: Encoding.Encoding) => {
  if (fromEncoding === toEncoding) {
    return text;
  }

  // jsでは一旦unicodeになるのでその文字コードを取得することでShift-JISでの文字コードに変換することができる
  const unicodeData = text.split("").map(e => e.charCodeAt(0));
  const u8binary = Encoding.convert(unicodeData, {to: "SJIS", from: "UNICODE"})
  return new TextDecoder().decode(Uint8Array.from(u8binary))
};

export default convertEncoding;
