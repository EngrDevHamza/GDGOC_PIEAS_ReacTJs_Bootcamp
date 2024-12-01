import React from "react";
import BookList from "./Components/BookList";
import BorrowedBooks from "./Components/BorrowedBooks";
import FavBooks from "./Components/FavBooks";

const App = () => {
  return (
    <div className="library-app">
      <h1>Library Manager</h1>
      <BookList />
      <BorrowedBooks />
      <FavBooks />
    </div>
  );
};

export default App;
