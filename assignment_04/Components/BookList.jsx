import React, { useContext } from "react";
import { BooksContext } from "./App";
import BookCard from "./Bookcard";

const BookList = () => {
  const books = useContext(BooksContext);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          genre={book.genre}
        />
      ))}
    </div>
  );
};

export default BookList;
