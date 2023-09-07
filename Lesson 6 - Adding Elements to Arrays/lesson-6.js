const numbers = [1, 2];
const append = (arr, el) => {
    return [...arr, el];
    // arr.push(el);
    return arr;
}

const newNumbers = append(numbers, 3);
console.log('newNumbers: ', newNumbers);//[1, 2]
console.log(numbers);
