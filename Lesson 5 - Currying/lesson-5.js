const multiply = (a) => {
    return (b) => {
        return a * b;
    };
};

// Single Line
const multiplySingle = (a) => (b) => a * b;

console.log(multiply(2)(3))
console.log(multiplySingle(5)(3))

const curry = function(fn) {
    var arity = fn.length;
   console.log("arity:", arity)
   return function f1(...args) {
    if (args.length >= 0 && args.length < arity){
        return (...moreArgs)=>{
            return f1(...[...args, ...moreArgs]);}
            } else{
                return fn(...args);}}
   }

const curriedSum = curry((a, b, c) => a + b + c); 
curriedSum(4)(6)(8);//=> 18
console.log(curriedSum(4)(6)(8))