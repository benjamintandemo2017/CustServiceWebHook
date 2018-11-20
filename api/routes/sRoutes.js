'use strict';
module.exports = function(app) {
  var _controller = require('../controllers/sController');


  // user List Routes
  app.route('/')
    .get(_controller.list_enquiry)
    .post(_controller.create_enquiry);

  // app.route('/rooms/:roomId')
  //   .get(room_list.read_a_room)
  //   .delete(room_list.delete_a_room);

};
