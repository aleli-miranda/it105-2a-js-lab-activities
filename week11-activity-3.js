// ARRAY
/* 
We are setting up our small library of books about JavaScript programming.
We have three books and want to prepare a list of them.
We will store three pieces of information about each book:
title, author, and number of pages:

- Speaking JavaScript, Axel Rauschmayer, 460
- Programming JavaScript Applications, Eric Elliott, 254
- Understanding ECMAScript 6, Nicholas C. Zakas, 352

Create an array of three objects representing the books.
Each object must have the following properties: title, author, pages.
*/

const books = [
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
  }
];

/* 
Add a new book to the collection:
Learning JavaScript Design Patterns, by Addy Osmani, 254 pages.
Use the appropriate method to do this, which will attach the book at the end of the array.
Display the length of the array and, in turn, all the book names in the collection.
*/

books.push({
  title: "Learning JavaScript Design Patterns",
  author: "Addy Osmani",
  pages: 254
});

console.log(`Number of books in the collection: ${books.length}`);
console.log("------------------------------------");
books.forEach(book => console.log(book.title));
console.log("------------------------------------");

/* 
Use the slice command to copy the last two books to the new array.
*/

const lastTwoBooks = books.slice(-2);
lastTwoBooks.forEach(book => console.log(book.title));
console.log("------------------------------------");

/* 
The first book from the collection is lost in unexplained circumstances.
You have already accepted the loss, so remove it from the array.
Which method will you use for this purpose?
Display the length of the array and all the names of the books from the collection in turn.
*/

books.shift();

console.log(`Number of books in the collection after removing the first book: ${books.length}`);
console.log("------------------------------------");
books.forEach(book => console.log(book.title));
console.log("------------------------------------");

/* 
Display the sum of the pages of all the books from the collection.
*/

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(`Total number of pages in the collection: ${totalPages}`);