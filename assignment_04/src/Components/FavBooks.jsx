import React, { useContext } from "react";
import { FavBooksContext } from "./App";

const FavBooks = () => {
  const { favBooks } = useContext(FavBooksContext);

  return (
    <div className="fav-books">
      <h2>Favorite Books</h2>
      <ul>
        {favBooks.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavBooks;
