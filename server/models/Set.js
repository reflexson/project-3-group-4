const { Schema, model } = require('mongoose');

const setSchema = new Schema({
    exercise:{
        type: String
    },
    oneRepMax: {
        type: Number
    },
    date: {
        type: String,
        // required:true,
    },
    
    // time:
});

const Set = model('Set', setSchema);

module.exports = Set;


