
let books = [
    {
        title: "About Something",
        author: "Fredrick Constante",
        pages: 420
    },
    {
        title: "About Applications",
        author: "Warren Zerrudo",
        pages: 67
    },
    {
        title: "About Understanding",
        author: "Gabrielle Velasquez",
        pages: 69
    }
];

console.log("Book Collection:");
console.log(books);

books.push({
    title: "About Website",
    author: "Shanaia grace",
    pages: 14
});

console.log("\nAfter adding a new book:");
console.log("Length of the array:", books.length);
console.log("Book names:");
books.forEach(book => console.log(book.title));


let lastTwoBooks = books.slice(-2);
console.log("\nLast two books copied to a new array:");
console.log(lastTwoBooks);

books.shift();

console.log("\nAfter removing the first book:");
console.log("Length of the array:", books.length);
console.log("Book names:");
books.forEach(book => console.log(book.title));

let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log("\nSum of the pages of all books:", totalPages);