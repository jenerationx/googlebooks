const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the book below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: ["J.K. Rowling, John Tiffany, Jack Thorne"],
    description: "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016.",
    image: "http://books.google.com/books/content?id=CGJEtfMCzfcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://books.google.com/books?id=tcSMCwAAQBAJ&dq=Harry+Potter&hl=&source=gbs_api",
    title: "Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)"
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

