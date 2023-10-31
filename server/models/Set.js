const { Schema, model } = require('mongoose');

const setSchema = new Schema({
    exercise:{
        type: String
    },
    oneRepMax: {
        type: Number
    },
    Date: {
        type: String,
        required:true,
    },
    

});

const Set = model('Set', setSchema);

module.exports = Set;


