angular.module('ea')
  .directive('gameListing', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing.directive.html',
      scope: {},
      controller: function ($scope, $http) {

        $scope.master_game_list = [];
        $scope.game_list = [];
        $scope.options = {}; // Initially empty, implies show everything
        $scope.potential_options = {}

        /**
         * Sets an option to filter on.  null value implies the option should be cleared
         * @param option_name
         * @param value
         */
        $scope.setOption = function (option_name, value) {
          if (_.isNull(value) || _.isUndefined(value)) {
            delete $scope.options[option_name];
          } else {
            $scope.options[option_name] = value;
          }
        }

        /**
         * Filters the current master game list and sets the slice of the filter to the game_list
         */
        $scope.filter = function () {
          $scope.game_list = _.filter($scope.master_game_list, $scope.options)
        };

        /**
         * This is just a shortcut to use an already curated json value blob...that said since there is less than 700, this is pretty small in size.
         */
        function getGameListing() {
          return $http.get('gamelist.json').success(function (result) {
            $scope.master_game_list = result;
            $scope.filter();
            return result;
          });
        }

        function getFilterOptions() {
          return $http.get('filters.json').success(function (result) {
            $scope.potential_options = result;
            $scope.filter();
            return result;
          });
        }

        getGameListing();
        getFilterOptions();
      }
    }
  });
