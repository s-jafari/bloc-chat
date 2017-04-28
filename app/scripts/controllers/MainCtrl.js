(function() {
  function MainCtrl(Room, Message) {
    var main = {};
    
    main.room = Room;
    main.message = Message;
    
    main.activeRoom = null;
    main.roomMessages = null;
        
    main.changeRoom = function(room) {
      activeRoom = room;
      roomMessages = main.message.getByRoomId(activeRoom.$id);
    };
    
    return main;
  }
  
  angular
    .module('blocChat')
    .controller('MainCtrl', ['Room', 'Message', MainCtrl]);
})();