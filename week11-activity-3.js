// Step 1: Create an array of three book objects
let books = [
  { title: "Speaking JavaScript", author: "Axel Rauschmayer", pages: 460 },
  { title: "Programming JavaScript Applications", author: "Eric Elliott", pages: 254 },
  { title: "Understanding ECMAScript 6", author: "Nicholas C. Zakas", pages: 352 }
];

// Step 2: Add a new book at the end using push()
books.push({ title: "Learning JavaScript Design Patterns", author: "Addy Osmani", pages: 254 });

// Display length and all book titles
console.log("Length of array:", books.length);
console.log("Books in collection:");
books.forEach(book => console.log(book.title));

// Step 3: Use slice() to copy the last two books into a new array
let lastTwoBooks = books.slice(-2);
console.log("\nLast two books copied:");
lastTwoBooks.forEach(book => console.log(book.title));

// Step 4: Remove the first book (use shift())
books.shift();

// Display length and all book titles after removal
console.log("\nAfter removing the first book:");
console.log("Length of array:", books.length);
books.forEach(book => console.log(book.title));

// Step 5: Display the sum of pages of all books
let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log("\nTotal pages of all books:", totalPages);
