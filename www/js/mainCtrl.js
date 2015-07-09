angular.module('starter')
  .controller('mainCtrl', ['$scope', '$interval', function($scope, $interval){
      $scope.minutes = $scope.seconds = 0;
      $scope.convertToMinutes = function(value) {
         $scope.minutes = Math.floor(value / 60);
         $scope.seconds = value % 60;
      };
      
      $scope.startTimer = function() {
        $interval(function() {
            if ( $scope.minutes != 0 || $scope.seconds != 0 ) {
                if ( $scope.seconds != 0 ) {
                    $scope.seconds = $scope.seconds - 1;
                    console.log($scope.seconds);
                }else {
                    $scope.seconds = 60;
                    $scope.minutes -= 1;
                } 
            }else {
                // $cordovaVibration.vibarate(100);   
            }
        }, 1000);  
      };
  }]);
