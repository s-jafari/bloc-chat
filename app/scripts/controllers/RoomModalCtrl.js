angular
  .module('blocChat')
  .controller('RoomModalCtrl', ['$scope', '$uibModalInstance', 'Room', function ($scope, $uibModalInstance, Room) {
    
    $scope.addRoom = function () {

      var userInput = $scope.userInput;
      Room.all.$add(userInput);
      alert(userInput + ' has been added.');

      $uibModalInstance.close();
    };
    
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    
  }]);