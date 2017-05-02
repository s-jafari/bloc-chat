(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    Message.getByRoomId = function (roomId) {
      var roomMessages = ref.orderByChild('roomId').equalTo(roomId);      
      return $firebaseArray(roomMessages);
    };
    
    Message.setUsername = function () {
      $cookies.blocChatCurrentUser = document.getElementById('username').value;
      alert($cookies.blocChatCurrentUser + " has been set as your username.");
    };
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();