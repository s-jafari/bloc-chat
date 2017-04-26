(function() {
  function Message($firebaseArray) {
    var Message = {};
    
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    Message.getRoomId = function (roomID) {
      var roomMessages = messages.oderByChild(roomID);
      return roomMessages;
    };
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();