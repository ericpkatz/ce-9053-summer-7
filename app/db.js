var Q = require("q");
var mongoose = require("mongoose");
module.exports = {
    connect: connect,
    disconnect: disconnect
};

function connect(){
    var dfd = Q.defer();   
    mongoose.connect("mongodb://localhost:27017/my_world");
    mongoose.connection.on("open", function(){
        dfd.resolve();
    });
    return dfd.promise;
}

function disconnect(){
   var dfd = Q.defer(); 
   mongoose.disconnect(function(){
       dfd.resolve();
   });
   return dfd.promise;
}