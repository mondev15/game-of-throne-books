import React from "react";
import BookApp from "./components/BookApp";
import BookCharacters from "./components/BookCharacters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <h1 style={{ textAlign: "center" }}> Game of Thrones Books</h1>
    <Router>
      <Routes>
        <Route exact path="/" element={<BookApp />} />
        <Route exact path="/books/:id" element={<BookCharacters />} />
      </Routes>
    </Router>
  </>
);

export default App;
