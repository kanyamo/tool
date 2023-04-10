const fixedVariables = ['x', 'y', 'z', 'w'];


/**
 * 変数に使う文字を生成する関数
 * もし生成個数が5以上なら、x_{1}, x_{2}, x_{3}, ... というように生成する
 * @param length いくつの変数を生成するか
 */
export const generateVariables = (length: number): string[] => {
  if (length <= fixedVariables.length) {
    return fixedVariables.slice(0, length);
  }
  return Array.from({ length: length }, (_, i) => `x_{${i + 1}}`);
}
