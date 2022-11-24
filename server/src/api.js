"use strict";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Book = require("./models/book");
const bp = require("body-parser");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL);

app.get("/.netlify/functions/api", (req, res) => {
  console.log("we are here");
  res.json({ Jack: "is great" });
});

/// retrieve all books
app.get("/.netlify/functions/api/books", async (req, res) => {
  try {
    // try and make a call to the database
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (err) {
    // show the error if the "try" fails
    console.log(err);
    res.status(500).json(allBooks);
  }
});

// retrieve a specific book
app.get("/.netlify/functions/api/books/:id", async (req, res) => {
  try {
    // try and make a call to the database
    const theBook = await Book.find({ _id: req.params.id });
    res.status(200).json(theBook);
  } catch (err) {
    // show the error if the "try" fails
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new book
app.post("/.netlify/functions/api/books", async (req, res) => {
  try {
    // const cover = await axios.get(`https://covers.openlibrary.org/b/id/${req.body.isbn}-L.jpg`);
    const newBook = await Book.create(req.body);
    res.status(200).json(newBook);
  } catch (err) {
    // console.log(err);
    // res.statuts(500).json(err);
  }
});

// update a book
app.put("/.netlify/functions/api/books/:id", async (req, res) => {
  try {
    const bookToUpdate = req.params.id;
    const updatedBook = await Book.updateOne({ _id: bookToUpdate }, req.body);
    res.status(200).json(updatedBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a book
app.delete("/.netlify/functions/api/books/:id", async (req, res) => {
  try {
    const bookToDelete = req.params.id;
    const deletedBook = await Book.deleteOne({ _id: bookToDelete }, req.body);
    res.status(200).json(deletedBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

// new Netlify way to start the server
const handler = serverless(app);

// we use this so the handler can use async (that mongoose uses)
module.exports.handler = async (event, context) => {
  // you can do any code here
  const result = await handler(event, context);
  // and here
  return result;
};

// module.exports.handler = serverless(app);
