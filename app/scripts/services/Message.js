(function() {
  function Message($firebaseArray) {
    var Message = {};
    
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    Message.getByRoomId = function (roomId) {
      var roomMessages = ref.orderByChild('roomId').equalTo(roomId);      
      return $firebaseArray(roomMessages);
    };
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();