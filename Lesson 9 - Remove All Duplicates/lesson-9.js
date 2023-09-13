// Remove all duplicates in an array 

const uniqueArr = (arr) => {
    return arr.reduce((acc, el) => {
        return acc.includes(el) ? acc : [...acc, el];
    }, []);
}