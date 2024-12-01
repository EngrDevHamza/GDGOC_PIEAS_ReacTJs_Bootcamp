import React, { createContext, useState, useEffect } from "react";

// Create Contexts
export const BooksContext = createContext();
export const BorrowedBooksContext = createContext();
export const FavBooksContext = createContext();

const App = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  useEffect(() => {
    // Fetch books data asynchronously
    const fetchBooks = async () => {
      const response = await fetch("/books.json");
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={books}>
      <BorrowedBooksContext.Provider
        value={{ borrowedBooks, setBorrowedBooks }}
      >
        <FavBooksContext.Provider value={{ favBooks, setFavBooks }}>
          {children}
        </FavBooksContext.Provider>
      </BorrowedBooksContext.Provider>
    </BooksContext.Provider>
  );
};

export default App;
