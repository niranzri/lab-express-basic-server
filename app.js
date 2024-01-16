// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require ("express");
const morgan = require("morgan");
const fs = require("fs");
const projects = require("./data/projects.json")
const articles = require("./data/articles.json")


// CREATE EXPRESS APP
const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static("public"))
app.use(express.json());
app.use(morgan("dev"))


// ROUTES
// Start defining your routes here:
app.get('/', (_, response) => {
    response.sendFile(__dirname + '/views/home.html')
    //response.send('<h1> Home page</h1>')
  })

app.get('/blog', (_, response) => {
    response.sendFile(__dirname + '/views/blog.html')
    //response.send('<h1> Blog page</h1>')
  })

app.get('/api/projects', (_, response) => {
    response.json(projects);
  });

app.get('/api/articles', (_, response) => {
    response.json(articles);
  });

app.get('*', (_, response) => {
    response.sendFile(__dirname + '/views/not-found.html')
  })

// START THE SERVER
app.listen(5005, () => {
    console.log("My first app listening on port 5005! ")
  });
