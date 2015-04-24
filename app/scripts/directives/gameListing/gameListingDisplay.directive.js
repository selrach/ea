'use strict';
/**
 * @ngdoc function
 * @name ea.directive:gameListingDisplay
 * @description
 * # gameListingDisplay
 * Simple container directive that basically sets up the data model necessary to display whatever is in teh game list.
 * The template is the most interesting thing here.
 */
angular.module('ea')
  .directive('gameListingDisplay', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing/gameListingDisplay.directive.html',
      scope: {
        gameList: '='
      },
      controller: function ($scope) {

        $scope.numToShow = 12;
        $scope.filteredGameList = [];

        function reset() {
          $scope.numToShow = 0;
          $scope.showMore();
        }

        $scope.showMore = function(){
          $scope.numToShow += 12;
          $scope.numToShow = Math.min($scope.numToShow, $scope.gameList.length);
          $scope.filteredGameList = $scope.gameList.slice(0,$scope.numToShow);
        };

        $scope.$watch(function(scope){
          return scope.gameList;
        }, reset, true);

        reset();
      }
    };
  });
