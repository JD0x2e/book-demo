const mongoose = require("mongoose");
const Book = require("./models/book");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create({
    title: "Star Wars",
    description: "Lightsabers, Wollivans & Jedi",
    year: "1976",
  });

  await Book.create({
    title: "Lord of the Rings",
    description: "Wizards, Elves & Spells",
    year: "1954",
  });

  console.log("Books begin!");
}

seed();
