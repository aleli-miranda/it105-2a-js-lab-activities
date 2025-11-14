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
  {title: "Speaking JavaScript", author:"Axel Rauschmayer", pages: 460 },
  {title: "Programming JavaScript Applications", author:"Eric Elliott", pages: 254 },
  {title: "Understanding ECMAScript 6", author:"Nicholas C. Zakas", pages: 352 }
];

/* Add a new book to the collection: 
Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. 
Use the appropriate method to do this, 
which will attach the book at the end of the array. 
Display the length of the array and, in turn, all the book names in the collection.*/

// Add a new book to the collection using push()
books.push({title:"Learning JavaScript Design Patterns",author:"Addy Osmani", pages: 254});

// Display the length of the array and all the book names
console.log("Length of the array:", books.length);
books.forEach(book => console.log(book.title));

//Use the slice command to copy the last two books to the new array.
let lastTwoBooks = books.slice(-2);
console.log("Last two books:", lastTwoBooks);

/*The first book from the collection is lost in unexplained circumstances. 
You have already accepted the loss, so remove it from the array. 
Which method will you use for this purpose? 
Display the length of the array and all the names of the books from the collection in turn.*/

// Remove the first book
books.shift();

// Display of all the book names after removal
console.log("Length after removal:", books.length);
books.forEach(book => console.log(book.title));

// Display the sum of all the books from the collection
let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log("Total pages:", totalPages);
