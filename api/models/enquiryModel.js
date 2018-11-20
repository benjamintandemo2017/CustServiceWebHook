'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var enquirySchema = new Schema({
  username: {
    type: String,
    Required: false
  },
  phoneNumber: {
    type: String,
    Required: false
  },
  description: {
    type: String,
    Required: false
  },
  ticketNumber: {
    type: Number,
    Required: false
  }

});

module.exports = mongoose.model('Enquiry', enquirySchema);
