var Person = require("../app/person");
var db = require("../app/db");
describe("Person", function(){
    beforeEach(function(done){
        db.connect()
            .then(function(){
                return Person.remove({});
            })
            .then(function(){
                var moe = new Person({name: "Moe"});
                return moe.save();
            })
            .then(function(){
                var larry = new Person({name: "Larry"}); 
                return larry.save();
            })
            .then(function(){
                var curly = new Person({ name: "Curly"}) 
                curly.save();
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
        expect(Person).toBeDefined();
    });
    
    describe("find", function(){
        var people;
        beforeEach(function(done){
            Person.find()
                .then(function(p){
                    people = p; 
                    done();
                });
        });
        it("there are three things", function(){
            expect(people.length).toEqual(3);
        });
    });
    describe("findOne", function(){
        var name;
        beforeEach(function(done){
           Person.findOne({name: "Moe"}) 
                .then(function(p){
                   name = p.name; 
                   done();
                });
        });
       it("it should return Moe", function(){
          expect(name).toEqual("Moe"); 
       }) 
    });
    
    describe("creating a person that exists", function(){
        var error;
        beforeEach(function(done){
            var badPerson = new Person({name: "Moe"});
            badPerson.save(function(e, x){
                error = e;
                done();
            });
        });
       it("returns an error", function(){
           expect(error).not.toEqual(null);
       }); 
    });
    describe("creating a person with no name", function(){
        var error;
        beforeEach(function(done){
            var badPerson = new Person({});
            badPerson.save(function(e, x){
                error = e;
                done();
            });
        });
       it("returns an error", function(){
           expect(error).not.toEqual(null);
       }); 
    });
});