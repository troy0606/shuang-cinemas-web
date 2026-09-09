// 乘法總和
export default (...args: Array<number>): number => {
  return args.reduce((pre, cur) => pre * cur, 1);
};
