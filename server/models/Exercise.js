const { Schema, model } = require('mongoose');
const Set = require('./Set');

const exerciseSchema = new Schema({
    exercise: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sets: [Set.schema]
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
