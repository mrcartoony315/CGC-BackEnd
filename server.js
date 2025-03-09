// console.log("Welcome to backend!");
const http = require("http");

let controller = (req, res) => {
  console.log(req);
};

const books = [
  {
    id: 1,
    name: "HTML & CSS",
    price: "400",
  },
  {
    id: 2,
    name: "JavaScript",
    price: "800",
  },
  {
    id: 3,
    name: "ES6",
    price: "700",
  },
  {
    id: 4,
    name: "React JS",
    price: "400",
  },
  {
    id: 5,
    name: "Python",
    price: "950",
  },
  {
    id: 6,
    name: "Java",
    price: "350",
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url.includes("welcome")) {
    res.statusCode = 200;
    res.write("Welcome to my Server!");
  } else if(req.url.includes("books")){
    res.write(JSON.stringify(books))
    let a = false;
    books.forEach((val) =>{
        var b = val.id.toString()
        if(req.url.includes(b)){
            res.statusCode = 200;
            res.write(JSON.stringify(val));
            a = true;
        }
    })
    if(a!=true){
        res.statusCode = 200;
        res.write("Book Not Found")
    }
  } 
  else {
    res.statusCode = 404;
    res.write("Request not found!");
  }
  res.end();
});
server.listen(5000, () => console.log("Server is Up!"));