const { Schema, model } = require('mongoose');
const Set = require('./Set');

const exerciseSchema = new Schema({
    exercise: {
        type: String,
        required: true
    },

});

const Exercise = model('exercise', exerciseSchema);

module.exports = Exercise;
