// 計算傳入數字總和
export default (...args: Array<number>): number => {
  return args.reduce((pre, cur)=> pre + cur, 0)
}