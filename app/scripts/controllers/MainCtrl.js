(function() {
  function MainCtrl($scope, $uibModal, Room, Message) {
    var main = this;
    
    this.room = Room;
    this.message = Message;
    
    this.activeRoom = null;
    this.roomMessages = null;
        
    this.changeRoom = function(room) {
      this.activeRoom = room;
      this.roomMessages = this.message.getByRoomId(this.activeRoom.$id);
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
    .controller('MainCtrl', ['$scope', '$uibModal', 'Room', 'Message', MainCtrl]);
})();