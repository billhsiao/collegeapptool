var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var draftSchema = new Schema({
    finalEditor: {
      type: String,
      maxLength: 2
    },
    version: {
      type: String
    },
    essay: {
      type: String,
    },
}, {
    timestamps: true
});



module.exports = mongoose.model('Draft', draftSchema);
