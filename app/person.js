var mongoose = require("mongoose");
var personSchema = mongoose.Schema({
    name: {required: true, type: String, unique: true}
});

var Person = mongoose.model("person", personSchema);

module.exports = Person;