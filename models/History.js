var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    url: {
        type: baseURL
    }
});

var History = mongoose.model("History", HistorySchema);
module.exports = History;

