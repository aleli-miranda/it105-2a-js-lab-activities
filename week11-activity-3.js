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

let books = [{
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460},
{
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254},
{
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352}];

/* Add a new book to the collection: 
Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. 
Use the appropriate method to do this, 
which will attach the book at the end of the array. 
Display the length of the array and, in turn, all the book names in the collection.*/

let newBook = {
    title: "JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254};

// Add a new book to the collection using push()

books.push(newBook);

// Display the length of the array and all the book names

console.log("--------------------------------------");
console.log("The length of the array is: " + books.length);
books.forEach(books => console.log(books.title));

// Use slice() to copy the last two books to a new array

console.log("--------------------------------------");
let nbs1 = books.slice(2);
console.log("Last two books:", nbs1);

/*The first book from the collection is lost in unexplained circumstances. 
You have already accepted the loss, so remove it from the array. 
Which method will you use for this purpose? 
Display the length of the array and all the names of the books from the collection in turn.*/

console.log("--------------------------------------");
books.shift(0);
books.forEach(books => console.log(books.title));
console.log("The length of the array is: " + books.length);

//Display the sum of the pages of all the books from the collection.

console.log("--------------------------------------");
let allPages = books.reduce((sum, books ) => sum + books.pages, 0);
console.log("Total number of pages from all books: " + allPages);