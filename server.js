var express = require("express");

var app = express();

app.get("/", function(req, res){
    console.log(req.query.count);
    var content = "<ul>";
    for(var i = 1; i <= req.query.count; i++){
        content += "<li>" + Math.random() + "</li>";
    }
    content += "</ul>";
   var html = "<html><body><h1>Hello World!!</h1>" + content +"</body></html>"
  res.send(html); 
});



app.listen(process.env.PORT);