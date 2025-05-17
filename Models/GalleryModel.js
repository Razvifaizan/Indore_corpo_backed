const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true
  },
  type:String,
  mediaUrl: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Media', MediaSchema);
