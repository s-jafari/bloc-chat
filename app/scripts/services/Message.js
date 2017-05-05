(function() {
  function Message($firebaseArray, $cookies) {
    var Message = this;
    
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    this.getByRoomId = function (roomId) {
      var roomMessages = ref.orderByChild('roomId').equalTo(roomId);      
      return $firebaseArray(roomMessages);
    };
    
    this.send = function(newMessage) {
      messages.$add(newMessage);
    };
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();