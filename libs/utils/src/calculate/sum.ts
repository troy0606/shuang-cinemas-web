// 計算傳入數字總和
const sum = (...args: Array<number>): number => {
  return args.reduce((pre, cur) => pre + cur, 0);
};
export default sum;
