// Sort an array of numbers

const arr = [3, 5, 1];
const result = arr.sort((a, b) => a - b);
console.log(arr, result)

// Sort array of objects by author's lastname

const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
  ];

books.sort((a, b) => {

    //compare names
    const lastnameA = a.author.split(" ")[1];
    const lastnameB = b.author.split(" ")[1];
    return lastnameA < lastnameB ? -1 : 1;
});

console.log(JSON.stringify(books));

