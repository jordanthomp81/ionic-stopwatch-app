angular.module('starter')
  .controller('mainCtrl', ['$scope', function($scope){
    $scope.tasks = {};
    $scope.taskSubmit = function() {
      $scope.tasks = {task: $scope.taskName};
    }
  }]);
