const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  date: String,
  oneRepMax: Number,
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
  },
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
