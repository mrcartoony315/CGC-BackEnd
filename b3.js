const http = require("http");

const books = [
  { id: 1, name: "HTML & CSS", price: "400" },
  { id: 2, name: "JavaScript", price: "800" },
  { id: 3, name: "ES6", price: "700" },
  { id: 4, name: "React JS", price: "400" },
  { id: 5, name: "Python", price: "950" },
  { id: 6, name: "Java", price: "350" },
];

const server = http.createServer((req, res) => {
  // Set default response headers
  res.setHeader("Content-Type", "application/json");

  // Parse the URL path for routing
  const url = req.url;
  
  if (url.includes("welcome")) {
    res.statusCode = 200;
    res.write(JSON.stringify({ message: "Welcome to my Server!" }));
  } else if (url.includes("books")) {
    // Extract book ID from URL (optional)
    const bookId = url.split("/").pop();
    
    if (bookId) {
      // Find the book by ID using .find() for better performance
      const book = books.find(b => b.id === parseInt(bookId));
      
      if (book) {
        res.statusCode = 200;
        res.write(JSON.stringify(book));
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ error: "Book Not Found" }));
      }
    } else {
      // Return all books if no specific ID is provided
      res.statusCode = 200;
      res.write(JSON.stringify(books));
    }
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ error: "Request not found!" }));
  }

  res.end();
});

server.listen(5000, () => console.log("Server is Up!"));
