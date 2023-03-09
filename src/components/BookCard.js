import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    minWidth: "280px",
    textAlign: "center",
    overflow: "hidden",
    background: "#202047",
    color: "white",
    borderRadius: "10px",
    "&:hover": {
      transform: "scale(1.05)",
      "transition-duration": ".5s",
      cursor: "pointer",
    },
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px",
    fontWeight: "bold",
  },
  bookTitle: {
    fontSize: "20px",
  },
  bookText: {
    color: "grey",
  },
  mediaType: {
    color: "grey",
    fontStyle: "italic",
    marginBottom: "30px",
  },
}));

const BookCard = ({ book }) => {
  const {
    name,
    isbn,
    numberOfPages,
    publisher,
    released,
    mediaType,
    country,
    authors,
    url,
  } = book;
  const navigate = useNavigate();
  const classes = useStyles();

  const handleClick = () => {
    const id = url.substring(url.lastIndexOf("/") + 1);
    navigate(`/books/${id}`);
  };

  return (
    <div onClick={handleClick} className={classes.card}>
      <h3 className={classes.bookTitle}>{name}</h3>
      <div className={classes.bookText}>Isbn : {isbn}</div>
      <div className={classes.bookText}> Publisher : {publisher}</div>
      <div className={classes.bookText}>Pages : {numberOfPages}</div>
      <div className={classes.bookText}>Counrty: {country}</div>
      <div className={classes.mediaType}>Type : {mediaType}</div>
      <div className={classes.footer}>
        <div>{released.split("T")[0]}</div>
        <div>{authors[0]}</div>
      </div>
    </div>
  );
};

export default BookCard;
