angular
  .module('blocChat')
  .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', 'Message', function ($uibModalInstance, Room, Message) {
    var $ctrl = this;
    
    $ctrl.room = Room;
    $ctrl.message = Message;
    
    $ctrl.ok = function () {
      $uibModalInstance.close();
    };
    
    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
}]);