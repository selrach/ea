'use strict';

/**
 * @ngdoc function
 * @name ea.directive:gameListing
 * @description
 * # gameListing
 * Simple container directive that delegates out most the responsiblity of display to the sub directives.
 * It connects the display of the game list with the filtering mechanisms.
 */
angular.module('ea')
  .directive('gameListing', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing.directive.html',
      replace: true,
      scope: {
        masterGameList: '=',
        filters: '='
      },
      controller: function ($scope) {

        $scope.gameList = []; //Static view of games available to display selected from the master game list due to options.
        $scope.options = {}; // Initially empty, implies show everything

        /**
         * Filters the current master game list and sets the slice of the filter to the gameList
         */
        function filter() {
          $scope.gameList = _.filter($scope.masterGameList, $scope.options);
        }

        /**
         * Set up watch for us to automatically do filtering if the set filters change.
         */
        $scope.$watch(function (scope) {
            return scope.options;
          },
          filter, true);

        /**
         * Set up watch to automatically apply filters if the master game list changes.
         */
        $scope.$watch(function (scope) {
            return scope.masterGameList;
          },
          filter, true);
        filter();
      }
    };
  });
