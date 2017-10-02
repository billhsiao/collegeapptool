var mongoose = require('mongoose');
// shortcut to the mongoose.Schema function
var Schema = mongoose.Schema;

var collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  earlyDecision: {
    type: Boolean,
  },

}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('College', collegeSchema);
