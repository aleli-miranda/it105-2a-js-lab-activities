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

// 1. Create an array of three book objects
let books = [
    { title: "Speaking JavaScript", author: "Axel Rauschmayer", pages: 460 },
    { title: "Programming JavaScript Applications", author: "Eric Elliott", pages: 254 },
    { title: "Understanding ECMAScript 6", author: "Nicholas C. Zakas", pages: 352 }
];

/* Add a new book to the collection: 
Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. 
Use the appropriate method to do this, 
which will attach the book at the end of the array. 
Display the length of the array and, in turn, all the book names in the collection.*/

// 2. Add a new book to the collection
books.push({ title: "Learning JavaScript Design Patterns", author: "Addy Osmani", pages: 254 });

// Display the length of the array
console.log("Total books:", books.length);

// Display all book names
books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
});

//Use the slice command to copy the last two books to the new array.
/* 3. Copy the last two books into a new array using slice */
let lastTwoBooks = books.slice(-2);
console.log("\nLast two books copied:");
lastTwoBooks.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
});

/*The first book from the collection is lost in unexplained circumstances. 
You have already accepted the loss, so remove it from the array. 
Which method will you use for this purpose? 
Display the length of the array and all the names of the books from the collection in turn.*/

// 4. Remove the first book (lost in mysterious circumstances)
books.shift(); // removes the first element

// Display new length and all book names
console.log("\nAfter removing the first book:");
console.log("Total books:", books.length);
books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
});

//Display the sum of the pages of all the books from the collection
// 5. Display the sum of pages of all books
let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log("\nTotal pages of all books:", totalPages);






// RUN ON TERMINAL TO SEE FINAL OUTPUT: node week11-activity-3.js 
// CONCEPCION, ASHLEY D.
