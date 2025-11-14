//ARRAY
/*We are setting up our small library of books 
about JavaScript programming. 
We have three books and want to prepare a list of them. 
We will store three pieces information about each book: 
title, author, and number of pages:

Speaking JavaScript, Axel Rauschmayer, 460;
Programming JavaScript Applications, Eric Elliott, 254;
Understanding ECMAScript 6, Nicholas C. Zakas, 352.

Create an array of three objects representing the books. 
Each object must have the following properties: title, author, pages.*/

// Create an array of three objects representing the books
let books = [
    {
        title: "Path to Greatness",
        author: "Lebron James",
        pages: 381
    },
    {
        title: "Do do Do dO",
        author: "Jane Doe",
        pages: 73
    },
    {
        title: "Abnkkbsnplako",
        author: "Don Aldrich",
        pages: 21000
    }
];

console.log("Book Collection:");
console.log(books)

/* Add a new book to the collection: 
Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. 
Use the appropriate method to do this, 
which will attach the book at the end of the array. 
Display the length of the array and, in turn, all the book names in the collection.*/

// Add a new book to the collection using push()
books.push({
    title: "World History",
    author: "Lapu-lapu",
    pages: 2025
});

console.log("\nAfter adding a new book:");
console.log("Length of the array:", books.length);
console.log("Book names:");
books.forEach(book => console.log(book.title));

//Use the slice command to copy the last two books to the new array.
let lasttwoBooks = books.slice(-2);
console.log("\nLast two books copied to a new array:");
console.log(lastTwoBooks);

/*The first book from the collection is lost in unexplained circumstances. 
You have already accepted the loss, so remove it from the array. 
Which method will you use for this purpose? 
Display the length of the array and all the names of the books from the collection in turn.*/

// Remove the first book from the collection using shift()
books.shift();

console.log("\nAfter removing the first book:");
console.log("Length of the array:", books.length);
console.log("Book names:");
books.forEach(book => console.log(book.title));

//Display the sum of the pages of all the books from the collection.

// Display the sum of the pages of all the books from the collection
let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log("\nSum of the pages of all books:", totalPages);

