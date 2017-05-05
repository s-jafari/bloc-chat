(function() {
  function MainCtrl($scope, $uibModal, $cookies, Room, Message) {
    var main = this;
    
    this.room = Room;
    this.message = Message;
    
    this.activeRoom = undefined;
    this.roomMessages = null;
        
    this.changeRoom = function(room) {
      this.activeRoom = room;
      this.roomMessages = this.message.getByRoomId(this.activeRoom.$id);
    };
    
    $scope.sendMessage = function() {
      var newMessage = {
        username: $cookies.blocChatCurrentUser,
        sentAt: new Date().toLocaleString(),
        content: $scope.messageContent,
        roomId: main.activeRoom.$id       
      };
      main.message.send(newMessage);
      $scope.messageContent = "";
    };
    
    $scope.open = function (size) {
      $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/roomModal.html',
        controller: 'RoomModalCtrl',
        controllerAs: '$ctrl',
        size: size
      });
    };
    
    return main;
  }
  
  angular
    .module('blocChat')
    .controller('MainCtrl', ['$scope', '$uibModal', '$cookies', 'Room', 'Message', MainCtrl]);
})();