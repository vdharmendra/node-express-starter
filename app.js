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