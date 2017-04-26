(function() {
  function MainCtrl(Room, Message) {
    var main = {};
    
    var activeRoom = null;
    
    main.room = Room;
    main.message = Message;
    
    main.changeRoom = function() {
      activeRoom = event.target;
      var roomID = activeRoom.$id;
      document.getElementById('header').innerHTML = activeRoom.$value;
      document.getElementById('content').innerHTML = message.getRoomId(activeRoom.$id);
    };
    
    return main;
  }
  
  angular
    .module('blocChat')
    .controller('MainCtrl', ['Room', 'Message', MainCtrl]);
})();