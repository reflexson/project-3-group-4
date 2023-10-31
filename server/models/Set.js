const { Schema, model } = require('mongoose');

const setSchema = new Schema({
    onerepmax: {
        type: Number
    },
    Date: {
        type: Date,
        required:true,
    },
    reps: {
        type: Number
    }
});
const Set = model('Set', setSchema);

module.exports = Set;


