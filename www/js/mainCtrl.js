angular.module('starter')

  .controller('mainCtrl', ['$scope', '$interval', function($scope, $interval){
      var countdown = null;
      $scope.minutes = $scope.seconds = 0;
      $scope.totalSeconds = 0;
      
      $scope.convertToMinutes = function(value) {
         $scope.minutes = Math.floor(value / 60);
         $scope.seconds = value % 60;
         $scope.totalSeconds = value;
      };

      $scope.startTimer = function() {
        countdown = $interval(function() {
            if ( $scope.minutes != 0 || $scope.seconds != 0 ) {
                if ( $scope.seconds != 0 ) {
                    $scope.seconds = $scope.seconds - 1;
                    $scope.totalSeconds -= 1;
                    $('.timer-slider').val($scope.totalSeconds)
                }else {
                    $scope.seconds = 60;
                    $scope.minutes -= 1;
                }
            }else {
                // $cordovaVibration.vibrate(100);
                $interval.cancel(countdown);
            }
        }, 1000);  
      };
      
      $scope.stopTimer = function() {
          $interval.cancel(countdown);
      };
  }]);

