const { Schema, model } = require('mongoose');

const setSchema = new Schema({
    oneRepMax: {
        type: Number
    },
    Date: {
        type: String,
        required:true,
    },
    reps: {
        type: Number
    }
});
const Set = model('Set', setSchema);

module.exports = Set;


