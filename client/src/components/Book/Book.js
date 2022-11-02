import React from "react";
import "../Book/Book.css";
import { Link } from "react-router-dom";

export default function Book({ books, deleteBook }) {
  return (
    <>
      <h2 className="book-title">Library of Books</h2>
      <div className="book-container">
        {books.map((bookObj, idx) => {
          return (
            <div className="book" key={idx}>
              <h3>
                <Link to={`/book/${bookObj._id}`}>{bookObj.title}</Link>
              </h3>
              <p>{bookObj.description}</p>
              <p>Year of Release: {bookObj.year}</p>
              <p>ISBN: {bookObj.isbn}</p>
              <img src={`https://covers.openlibrary.org/b/isbn/${bookObj.isbn}-L.jpg`} alt={`${bookObj.title} cover`} />
              <button className="book-button" onClick={() => deleteBook(bookObj)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
    </>
  );
}
