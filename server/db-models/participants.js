const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const ParticipantsSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contribution: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  issuer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Participants', ParticipantsSchema);
