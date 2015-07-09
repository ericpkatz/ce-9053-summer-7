var mongoose = require("mongoose");
var thingSchema = mongoose.Schema({
    name: String
});

var Thing = mongoose.model("thing", thingSchema);

module.exports = Thing