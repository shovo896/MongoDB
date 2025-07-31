// insert_books.js
// MongoDB Script to Insert Sample Book Data

const { MongoClient } = require("mongodb");

// Connection URI — replace with your actual MongoDB URI if needed
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("libraryDB");
    const collection = database.collection("books");

    const books = [
      {
        title: "The Art of War",
        author: "Sun Tzu",
        pages: 273,
        genres: ["Philosophy", "Military Strategy"],
        date: new Date("2020-01-10"),
      },
      {
        title: "1984",
        author: "George Orwell",
        pages: 328,
        genres: ["Dystopian", "Political Fiction", "Science Fiction"],
        date: new Date("2021-07-18"),
      },
      {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        pages: 1312,
        genres: ["Computer Science", "Algorithms", "Education"],
        date: new Date("2023-03-05"),
      },
    ];

    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} documents were inserted.`);
  } catch (err) {
    console.error("Error inserting documents:", err);
  } finally {
    await client.close();
  }
}

run();
