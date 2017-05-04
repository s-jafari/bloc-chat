(function() {
  function Room($firebaseArray) {
    var Room = this;
    
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
    
    this.all = rooms;
    
    return Room;
  }
  
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();