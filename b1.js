// console.log("Welcome to backend!");
const http = require("http");
const { stringify } = require("querystring");

let controller = (req, res) => {
  console.log(req);
};

let books = [
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
    name: "Python",
    price: "1000"
  },
  {
    id: 4,
    name: "SQL",
    price: "200"
  },
  {
    id: 5,
    name: "Java",
    price: "500"
  }
];

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url.includes("welcome")) {
    res.statusCode = 200;
    res.write("Welcome to my Server!");
  } else if (req.url.includes("books")) {

    // res.statusCode = 200;
    // res.write(req.url)
    // res.write(JSON.stringify(books));
    let a=false
    books.forEach((val)=>{
      var b=val.id.toString()
      // b=b.toString()
      // console.log(b)
      if(req.url.includes(b)){
        res.statusCode = 200;
        res.write(JSON.stringify(val));
        a=true
      }
    })
    if(a!=true){
      res.statusCode = 200;
      res.write("Request not found!");
    }
  } else {
    res.statusCode = 404;
    res.write("Request not found!");
  }
  res.end();
});
server.listen(5000, () => console.log("Server is Up!"));