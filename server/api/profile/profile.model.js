'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: String,
  location: String,
  points: Number,
  experiences: [{
    company: String,
    description: String,
    startDate: Date,
    endDate: Date,
    title: Date
  }],
  summary: String,
  role: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Profile', ProfileSchema);
