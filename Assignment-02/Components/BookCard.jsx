import React from "react";

const BookCard = ({ title, author, rating, genre }) => (
  <div
    style={{
      border: "1px solid #ccc",
      margin: "10px",
      padding: "10px",
      borderRadius: "5px",
    }}
  >
    <h3>{title}</h3>
    <p>
      <strong>Author:</strong> {author}
    </p>
    <p>
      <strong>Rating:</strong> {rating}
    </p>
    <p>
      <strong>Genre:</strong> {genre}
    </p>
  </div>
);

export default BookCard;
