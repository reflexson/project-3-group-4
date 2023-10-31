const { Schema, model } = require('mongoose');

const setSchema = new Schema({
    oneRepMax: {
        type: Number
    },
    Date: {
        type: String,
        required:true,
    },
    
    // time:
});

const Set = model('Set', setSchema);

module.exports = Set;


