const { Schema, model } = require('mongoose');

const setSchema = new Schema({
    onerepmax: {
        type: Number
    },
    Date: {
        type: Date
    },
    
    // time:
});

const Set = model('Set', setSchema);

module.exports = Set;
