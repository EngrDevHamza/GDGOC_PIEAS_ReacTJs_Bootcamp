import React from "react";
import HighRatedBooks from "../Components/HighRatedBooks";
import BookDetails from "../Components/BookDetails";
import FictionBooks from "../Components/FictionBooks";
import BookAuthors from "../Components/BookAuthors";

const App = () => (
  <div>
    <h1>Book Library</h1>
    <HighRatedBooks />
    <FictionBooks />
    <BookAuthors />
    <BookDetails />
  </div>
);

export default App;
