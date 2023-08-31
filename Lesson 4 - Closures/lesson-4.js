// Create a counter function which has increment and getValue functionality

const privateCounter = () => {
    let count = 0;

    return {
        increment: (value = 1) => { count += value; }, 
        getValue :()=>count,
        } 
};
    
const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.dir(counter.getValue);

const privateSecret = () => {
    const secret = "foo";

    return () => secret;
};

const getSecret = privateSecret();
console.log(getSecret())