// MongoDB Shell Guide
// Run this file step-by-step in MongoDB Shell (mongosh)

// 1. Switch to (or create) the 'bookstore' database
use bookstore

// 2. Create a collection named 'books' and insert multiple documents
db.books.insertMany([
  {
    title: "The Color of Magic",
    author: "Terry Pratchett",
    pages: 300,
    rating: 7,
    genres: ["Fantasy", "Adventure"]
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    rating: 9,
    genres: ["Dystopian", "Political Fiction"]
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    rating: 8,
    genres: ["Classic", "Historical Fiction"]
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    rating: 9,
    genres: ["Fantasy", "Adventure"]
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    pages: 256,
    rating: 8,
    genres: ["Science", "Non-Fiction"]
  }
]);

// 3. Show all collections in the current database
show collections

// 4. Query all books
db.books.find().pretty()

// 5. Query books with rating >= 8
db.books.find({ rating: { $gte: 8 } }).pretty()

// 6. Query books that have "Fantasy" as a genre
db.books.find({ genres: "Fantasy" }).pretty()

// 7. Update the rating of one book
db.books.updateOne(
  { title: "The Color of Magic" },
  { $set: { rating: 8 } }
);

// 8. Delete a book by title
db.books.deleteOne({ title: "1984" });

// 9. Count the total number of books
db.books.countDocuments()

// 10. Drop the 'books' collection (⚠️ irreversible)
db.books.drop()
