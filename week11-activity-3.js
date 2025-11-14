// Create an array of three objects representing the books
let books = [
    {
        title: "About Something",
        author: "Gabriel Velasquez",
        pages: 420
    },
    {
        title: "About clankers",
        author: "Shawn Reyes",
        pages: 109
    },
    {
        title: "About Understanding JavaScript",
        author: "Warren Zerrudo",
        pages: 69
    }
];

console.log("Book Collection:");
console.log(books);

// Add a new book to the collection
books.push({
    title: "About Website",
    author: "Erika Velasquez",
    pages: 14
});

console.log("\nAfter adding a new book:");
console.log("Length of the array:", books.length);
console.log("Book names:");
books.forEach(book => console.log(book.title));

// Use the slice command to copy the last two books to the new array
let lastTwoBooks = books.slice(-2);
console.log("\nLast two books copied to a new array:");
console.log(lastTwoBooks);

// Remove the first book from the array
books.shift();

console.log("\nAfter removing the first book:");
console.log("Length of the array:", books.length);
console.log("Book names:");
books.forEach(book => console.log(book.title));

// Display the sum of the pages of all the books from the collection
let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log("\nSum of the pages of all books:", totalPages);