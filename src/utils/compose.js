
const compose =(...func) => (comp) => {
  return func.reduceRight(
    (prefResult, fn) => fn(prefResult),comp
  );
};

export default compose ;
