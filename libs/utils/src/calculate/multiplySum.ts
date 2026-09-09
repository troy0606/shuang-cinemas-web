// 乘法總和
const multiplySum = (...args: Array<number>): number => {
  return args.reduce((pre, cur) => pre * cur, 1);
};
export default multiplySum;
