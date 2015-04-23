'use strict';

angular.module('ea')
  .directive('gameListingFilter', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing/gameListingFilter.directive.html',
      scope: {
        options: '=',
        filters: '='
      },
      controller: function ($scope) {
        $scope.processed_filters = [];


        /**
         * Sets an option to filter on.  null value implies the option should be cleared
         * @param option_name
         * @param value
         */
        $scope.selectFilter = function (filter, value) {
          if (_.isNull(value) || _.isUndefined(value) || value == '') {
            delete $scope.options[filter.name];
          } else {
            $scope.options[filter.name] = value;
          }
        }

        /**
         * Set up a watch in case the set of filters changes on us (loaded async.)
         */
        $scope.$watch(function (scope) {
            return scope.filters;
          },
          updateFilters);
        updateFilters();

        function updateFilters() {
          var filters = [];
          _.each($scope.filters, function (filter_value, filter_key) {
            var option_copy = angular.copy(filter_value);
            option_copy.unshift('');
            var new_filter = {
              name: filter_key,
              selected: $scope.options[filter_key],
              options: option_copy
            }
            filters.push(new_filter);
          });
          $scope.processed_filters = filters;
        }

      }
    };
  });
