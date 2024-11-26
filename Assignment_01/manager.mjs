import { Books } from "./books.mjs";

//Function 1: Print the Title of Books having rating greater then 4.5
const printHighRatedBooks = () => {
  const highRatedBooks = Books.filter((book) => book.Rating > 4.5);
  highRatedBooks.forEach((book) => console.log(book.Title));
};

// Function 2: Print details of all books (title, author, rating, genre) using destructuring
const printBookDetails = () => {
  Books.map(({ Title, Author, Rating, Genre }) => {
    console.log(
      `Title: ${Title}, Author: ${Author}, Rating: ${Rating}, Genre: ${Genre}`
    );
  });
};

// Function 3: Print book titles with the genre "Fiction"
const printFictionBooks = () => {
  const fictionBooks = Books.filter(
    (book) => book.Genre.toLowerCase() === "fiction"
  );
  fictionBooks.forEach((book) => console.log(book.Title));
};

// Function 4: Display an array of book authors
const displayBookAuthors = () => {
  const Authors = Books.map((book) => book.Author);
  console.log("Authors:", Authors);
};

console.log("Books with rating higher than 4.5: ");
printHighRatedBooks();

// console.log("\nDetails of all books:");
// printBookDetails();

// console.log("\nBooks with the genre 'Fiction':");
// printFictionBooks();

// console.log("\nArray of book authors:");
// displayBookAuthors();
