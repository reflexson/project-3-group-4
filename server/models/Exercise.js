const { Schema, model } = require('mongoose');
const Set = require('./Set');

const exerciseSchema = new Schema({
    exercise: {
        type: String,
        required: true
    },

});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
