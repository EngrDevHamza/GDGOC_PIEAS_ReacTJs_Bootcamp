import React, { useContext } from "react";
import { BorrowedBooksContext, FavBooksContext } from "./App";

const BookCard = ({ title, author, rating, genre }) => {
  const { borrowedBooks, setBorrowedBooks } = useContext(BorrowedBooksContext);
  const { favBooks, setFavBooks } = useContext(FavBooksContext);

  const handleAddMe = () => {
    if (!borrowedBooks.includes(title)) {
      setBorrowedBooks([...borrowedBooks, title]);
    }
  };

  const handleFavorite = () => {
    if (!favBooks.includes(title)) {
      setFavBooks([...favBooks, title]);
    }
  };

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
      <button onClick={handleAddMe}>Add Me</button>
      <button onClick={handleFavorite}>Favorite</button>
    </div>
  );
};

export default BookCard;
