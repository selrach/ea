'use strict';

angular.module('ea')
  .directive('gameListing', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing.directive.html',
      replace: true,
      scope: {},
      controller: function ($scope, $http) {

        $scope.master_game_list = []; // Container for all the games available to display.
        $scope.game_list = []; //Static view of games available to display selected from the master game list due to options.
        $scope.options = {}; // Initially empty, implies show everything
        $scope.filters = {}; // We are letting the server determine the filters available.


        /**
         * Set up watch for us to automatically do filtering if the set filters change.
         */
        $scope.$watch(function (scope) {
            return scope.options;
          },
          filter);

        getGameListing();
        getFilterOptions();

        /**
         * Filters the current master game list and sets the slice of the filter to the game_list
         */
        function filter() {
          $scope.game_list = _.filter($scope.master_game_list, $scope.options)
        };

        /**
         * This is just a shortcut to use an already curated json value blob...that said since there is less than 700, this is pretty small in size.
         * @returns the promise associated with the request.
         */
        function getGameListing() {
          return $http.get('gamelist.json').success(function (result) {
            $scope.master_game_list = result;
            filter();
            return result;
          });
        }

        /**
         * Shortcut to grab a set of server determined filters.
         * @returns the promise associated with the request.
         */
        function getFilterOptions() {
          return $http.get('filters.json').success(function (result) {
            $scope.filters = result;
            return result;
          });
        }

      }
    }
  });
