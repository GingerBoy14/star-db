const compose = (...func) => (component) =>{
  return func.reduceRight((prevResult, f)=>f(prevResult),(component));
};

/*
* const arr = ['a', 'b', 'c'];
* const res = arr.reduceRight((prevResult,value)=>{
* return prevResult + value;
* },'xx');
* result is xxcba
* */
export default compose;