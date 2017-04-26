(function() {
  function Room($firebaseArray) {
    var Room = {};
    
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
    
    Room.all = rooms;
    
    Room.zeig = function() {
      console.log(Room.all)
    };
    
    Room.addUserInput = function() {
      var userInput = document.getElementById('userInput').value;
      rooms.$add(userInput);
      alert(userInput + ' has been added.');
    };
    
    return Room;
  }
  
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();