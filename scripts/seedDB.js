const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the book below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = {
  title: "Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)",
  authors: ["J.K. Rowling, John Tiffany, Jack Thorne"],
  description: "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016.",
  image: "https://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72XFcESeN8KrVwT8HNO5psFcJkL899PKb6-BLAZUlSe3z6z8B8IBPkeyIWWiB4Yz7qPXoHBaqhZ63S-XO5XS1MmF3-hLvu5Knp0QzRdou_hYLxEn7Ww4RBX6_D_8tjTxVa5aSeJ",
  link: "https://books.google.com/books?id=tcSMCwAAQBAJ&dq=Harry+Potter&hl=&source=gbs_api"
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertOne(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

