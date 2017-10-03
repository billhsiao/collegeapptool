var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

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
  mainPrompt: {
    type: String,
  },
  mainEssay: {
    type: String,
  },
  
  drafts: [{type: ObjectId, ref: 'Drafts'}],

  supplementaryPrompt: {
    type: String,
  },
  supplementaryEssay: {
    type: String,
  },

}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('College', collegeSchema);
