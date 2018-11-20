'use strict';


var mongoose = require('mongoose'),
  Enquiry = mongoose.model('Enquiry');

exports.list_enquiry = function(req, res) {
  //const enquiryToSearch = req.body.queryResult.parameters.product ? req.body.queryResult.parameters.product : '';

  Enquiry.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_enquiry = function(req, res) {
  let ticketnum = randomIntInc(100000,999999);

  console.log(req.body.queryResult.parameters);

  let username = req.body.queryResult.outputContexts[0].parameters['given-name'];
  let phone_number = req.body.queryResult.outputContexts[0].parameters['phone-number'];
  let ticketDescription = req.body.queryResult['queryText']

  req.body.ticketNumber = ticketnum;

  var enquiryData = {
    description: ticketDescription,
    username: username,
    phoneNumber: phone_number,
    ticketNumber: ticketnum
  };

  var new_enquiry = new Enquiry(enquiryData);

  new_enquiry.save(function(err, task) {
    if (err)
      res.send(err);
    else{
      res.json({ 'fulfillmentText': "Thanks for contacting us. We have logged down your enquiry and it will be looked into. Your ticket number is " + ticketnum + ". One of our service representative will reach out to you within 24 hours."});
    }    
  });
};


function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
};


/* exports.delete_a_room = function(req, res) {
  Room.remove({
    _id: req.params.roomId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ task: 'Room successfully deleted' });
  });
};



exports.read_a_room = function(req, res) {
  Room.findById(req.params.roomId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}; */

