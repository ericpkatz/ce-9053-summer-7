var Thing = require("../app/thing");
var db = require("../app/db");
describe("Thing", function(){
    beforeEach(function(done){
        db.connect()
            .then(function(){
                return Thing.remove({});
            })
            .then(function(){
                var rock = new Thing({name: "Rock"});
                return rock.save();
            })
            .then(function(){
                var paper = new Thing({name: "Paper"}); 
                return paper.save();
            })
            .then(function(){
                var scissors = new Thing({ name: "Scissors"}) 
                scissors.save();
            })
            .then(function(){
              done();  
            });
    });
    afterEach(function(done){
        db.disconnect()
            .then(function(){
                done();
            });
    });
    it("exists", function(){
        expect(Thing).toBeDefined();
    });
    
    describe("find", function(){
        var things;
        beforeEach(function(done){
            Thing.find()
                .then(function(thingsInDatabase){
                    things = thingsInDatabase;
                    done();
                });
        });
        it("there are three things", function(){
            expect(things.length).toEqual(3);
        });
    });
    describe("findOne", function(){
        var name;
        beforeEach(function(done){
           Thing.findOne({name: "Rock"}) 
                .then(function(rock){
                   name = rock.name; 
                   done();
                });
        });
       it("it should return a rock", function(){
          expect(name).toEqual("Rock"); 
       }) 
    });
});