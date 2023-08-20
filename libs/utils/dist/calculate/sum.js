// 計算傳入數字總和
export default (...args) => {
    return args.reduce((pre, cur) => pre + cur, 0);
};
