const { Schema, model } = require('mongoose');

const setSchema = new Schema({
    onerepmax: {
        type: Number
    },
    Date: {
        type: Date,
        required:true,
    },
    
    // time:
});

const Set = model('Set', setSchema);

module.exports = Set;
