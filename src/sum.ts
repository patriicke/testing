type Tsum<N> = (a: N, b: N) => N;
const sum: Tsum<number> = (a, b) => {
  return a + b;
};

export default sum;
