import React, { useState, useEffect } from "react";
import BookCard from "./BookCard.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  filters: {
    padding: "1.5rem 2rem 0rem",
    textAlign: "center",
  },
  label: {
    padding: "1rem",
    fontWeight: "bold",
    fontSize: "1.09rem",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "20px",
    columnGap: "20px",
  },
  results: {
    padding: "20px",
  },
}));

const BookList = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [filterTags, setFilterTags] = useState([]);

  const filteredBooks =
    filterTags.length > 0
      ? books.filter((book) => filterTags.includes(book.mediaType))
      : books;

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };
  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <main className="main-content">
      <form className={classes.filters}>
        <div className="checkbox-select">
          <label htmlFor="hardCover" className={classes.label}>
            <input
              type="checkbox"
              className="mr-2 cat-check"
              id="hardCover"
              value="Hardcover"
              onChange={filterHandler}
            />
            HardCover
          </label>
          <label htmlFor="hardback" className={classes.label}>
            <input
              type="checkbox"
              className="mr-2 cat-check"
              id="hardback"
              value="Hardback"
              onChange={filterHandler}
            />
            HardBack
          </label>
          <label htmlFor="graphicNovel" className={classes.label}>
            <input
              type="checkbox"
              className="mr-2 cat-check"
              id="graphicNovel"
              value="GraphicNovel"
              onChange={filterHandler}
            />
            GraphicNovel
          </label>
          <label htmlFor="paperback" className={classes.label}>
            <input
              type="checkbox"
              className="mr-2 cat-check"
              id="paperback"
              value="Paperback"
              onChange={filterHandler}
            />
            PaperBack
          </label>
        </div>
      </form>
      <div className={classes.results}>
        Results : {filteredBooks.length} books
      </div>
      <div className={classes.cardsContainer}>
        {filteredBooks?.map((el) => (
          <BookCard key={el.isbn} book={el} />
        ))}
      </div>
    </main>
  );
};

export default BookList;
