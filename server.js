var express = require("express");

var app = express();
app.locals.pretty = true;
app.set("view engine", "jade");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/people", function(req, res){
    res.render("people");
});

app.get("/things", function(req, res){
    res.render("things");
});

app.listen(process.env.PORT);