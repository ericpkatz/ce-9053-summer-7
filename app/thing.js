var mongoose = require("mongoose");
var thingSchema = mongoose.Schema({
    name: {type: String, unique: true}
});

var Thing = mongoose.model("thing", thingSchema);

module.exports = Thing;