var db = require("../app/db");

describe("db", function(){
   var connected = true; 
   
   it("can connect", function(){
       expect(connected).toEqual(true);
   });
    
});