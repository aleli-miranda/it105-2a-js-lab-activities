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
let library = [
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


/* Add a new book to the collection:
Learning JavaScript Design Patterns, by Addy Osmani, 254 pages.
Use the appropriate method to do this,
which will attach the book at the end of the array.
Display the length of the array and, in turn, all the book names in the collection.*/
library.push({
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
});

console.log("\n--- After Adding New Book ---");
console.log("Length of the array:", library.length);
console.log("Book Names in Collection:");
library.forEach(book => console.log(book.title));

//Use the slice command to copy the last two books to the new array.
let lastTwoBooks = library.slice(library.length - 2);


/*The first book from the collection is lost in unexplained circumstances.
You have already accepted the loss, so remove it from the array.
Which method will you use for this purpose?
Display the length of the array and all the names of the books from the collection in turn.*/
let lostBook = library.shift(); 

console.log("Removed Book:", lostBook.title);
console.log("Length of the array:", library.length);
console.log("Book Names in Collection:");
library.forEach(book => console.log(book.title));


//Display the sum of the pages of all the books from the collection.
let totalPages = library.reduce((sum, book) => {
    return sum + book.pages;
}, 0); 

console.log("\n--- Total Pages ---");
console.log("Sum of the pages of all the remaining books:", totalPages);