const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        requried: true,
    },
    image:{
        type: String,
        required: true
    }
});

const Suggestion =  mongoose.model("Suggestion", SuggestionSchema);

module.exports = Suggestion;