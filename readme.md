# node-express-starter

A simple starter project to understand the basics of Node.js using the Express framework. This project demonstrates setting up an npm project, creating basic routes, and using **nodemon** for live reloading during development.

## 🚀 Features

- Basic Node.js server with [Express](https://expressjs.com/)
- Simple route handling (`GET /`)
- Live reload using [nodemon](https://www.npmjs.com/package/nodemon)
- Clean and minimal setup — perfect for beginners

---

## 🧰 Prerequisites

- [Node.js](https://nodejs.org/) installed (v14+ recommended)
- npm (comes with Node.js)

---

## 📦 Setup Instructions

### 1. Initialize npm and install dependencies
```bash
npm init -y
npm install express
npm install --save-dev nodemon

jshintversion:6
// EXPRESS 
const express = require('express');

const app = express();

// HANDLING REQUEST & RESPONSE [ GET Request ]

app.get("/", function(Req, res){
    res.send("<h1>Hello</h1>");
});

// UNDERSTANDING & WORKING WITH ROUTES
// ABOUT US PAGE 
app.get("/aboutus", function(req,res){
    res.send("This is About Us Page");
});
// THIS IS SERVICES PAGE
app.get("/services", function(req,res){
    res.send("This is Services Page");
});
// THIS IS HOBBIES PAGE
app.get("/hobbies", function(req,res){
    res.send("This is Hobbies Page <p>Nothing is bigger than unknown entity</p>");
});
// THIS IS CONTACT US PAGE
app.get("/contactus", function(req,res){
    res.send("This is Contact Us Page");
});

// EXPRESS APP LISTENING ON PORT 3000
app.listen(3000, function(){
    console.log("Server up and running on port 3000");
});

```


✅ What You Learn

-Initializing an npm project
-Installing Express and nodemon
-Creating a basic route with Express
-Using nodemon to automatically restart the server on file changes