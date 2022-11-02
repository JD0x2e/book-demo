import React from "react";
import "../CreateBook/CreateBook.css";

export default function CreateBook({ handleChangeCreate, createNewBook, createForm }) {
  return (
    <div className="new-book-container">
      <h2 className="new-book-title">Add a new Book</h2>
      <form className="form" onSubmit={createNewBook}>
        <input
          className="form-input"
          name="title"
          onChange={handleChangeCreate}
          placeholder="Title of Book"
          value={createForm.title}
        />
        <input
          className="form-input"
          name="author"
          onChange={handleChangeCreate}
          placeholder="Author"
          value={createForm.author}
        />
        <input
          className="form-input"
          name="description"
          onChange={handleChangeCreate}
          placeholder="Description"
          value={createForm.description}
        />
        <input
          className="form-input"
          name="year"
          onChange={handleChangeCreate}
          placeholder="Year of Release"
          value={createForm.year}
        />
        <input
          className="form-input"
          name="isbn"
          onChange={handleChangeCreate}
          placeholder="ISBN Number"
          value={createForm.isbn}
        />
        <button className="new-book-button">Create Book</button>
      </form>
    </div>
  );
}
