var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var essaySchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true
  },
  essay: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Essay', essaySchema);
