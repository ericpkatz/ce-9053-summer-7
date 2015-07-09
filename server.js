var express = require("express");
var db = require("./app/db");
var Thing = require("./app/thing");
var Person = require("./app/person");

db.connect()
    .then(function(){
        console.log("database is connected");
    });

var app = express();
app.locals.pretty = true;
app.set("view engine", "jade");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/people", function(req, res){
    Person.find()
        .then(function(people){
            res.render("people", {people: people}); 
        });
});

app.get("/things", function(req, res){
    Thing.find()
        .then(function(things){
            res.render("things", { things: things})
        });
});

app.listen(process.env.PORT);