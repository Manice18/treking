const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StateSchema = new Schema({
    stateName: {
        type: String,
        required: true
    },
    desName:[{
        type: String,
        required: true
    }],
    desc:[{
        type: String,
        required: true
    }]
        
            // desName1: {
            //     type: String,
            //     required: true
            // },
            // desc1: {
            //     type: String,
            //     required: true
            // },
            // desName2: {
            //     type: String,
            //     required: true
            // },
            // desc2: {
            //     type: String,
            //     required: true
            // },
            // desName3: {
            //     type: String,
            //     required: true
            // },
            // desc3: {
            //     type: String,
            //     required: true
            // }
})

const NameState =  mongoose.model("NameState", StateSchema);

module.exports = NameState;