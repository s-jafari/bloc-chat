angular
  .module('blocChat')
  .controller('UsernameModalCtrl', ['$scope', '$uibModalInstance', '$cookies', function ($scope, $uibModalInstance, $cookies) {
    
    $scope.setUsername = function () {
      if($scope.username == "") {
        alert('Please enter a username.');
      } else {
      $cookies.blocChatCurrentUser = $scope.username;
      alert($cookies.blocChatCurrentUser + " has been set as your username.");
      $uibModalInstance.close();
      }
    };
 
}]);