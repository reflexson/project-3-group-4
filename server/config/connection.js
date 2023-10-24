const mongoose = require('mongoose');
//workouts is a temporary name for the mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/work-outs');

module.exports = mongoose.connection;