import React, { useContext } from "react";
import { BorrowedBooksContext } from "./App";

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(BorrowedBooksContext);

  return (
    <div className="borrowed-books">
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
