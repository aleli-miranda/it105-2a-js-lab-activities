// Create an array of three objects representing the books
let books = [
  { title: "Learn JavaScript", author: "Axel Coro", pages: 500 },
  { title: "Programming Application", author: "Eric Elliott", pages: 254 },
  { title: "Understanding Programming Language", author: "Nicholas C. Ermino", pages: 421 }
];


// Add a new book to the collection using push()
books.push({ title: "Learning JavaScript Design ", author: "Marco Ronario", pages: 254 });

// Display the length of the array and all the book names
console.log("Length of the array:", books.length);
books.forEach(book => console.log(book.title));

//Use the slice command to copy the last two books to the new array.

// Use slice() to copy the last two books to a new array
let lastTwoBooks = books.slice(-2);
console.log("Last two books:", lastTwoBooks);

// Remove the first book from the collection using shift()
books.shift();

// Display the length of the array and all the book names after removal
console.log("Length after removal:", books.length);
books.forEach(book => console.log(book.title));


// Display the sum of the pages of all the books from the collection
let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log("Total pages:", totalPages);

