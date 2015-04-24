'use strict';

/**
 * @ngdoc function
 * @name ea.directive:gameListingHeader
 * @description
 * # gameListingHeader
 * Header information display.  Basically decides based on the filter(s) selected what the title should be.
 */
angular.module('ea')
  .directive('gameListingHeader', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing/gameListingHeader.directive.html',
      scope: {
        options: '='
      },
      controller: function ($scope) {

        /**
         * Updates the subtitle based on some simple rules.  These business rules could be coming from the server
         */
        function updateSubtitle() {
          if (_.isEmpty($scope.options)) {
            $scope.subtitle = 'All';
          } else {
            //Simple precedence, only set up to display one of the currently selected filter values.
            $scope.subtitle = $scope.options.platform || $scope.options.genre || $scope.options.franchise;
            if(_.isEmpty($scope.subtitle)) {
              $scope.subtitle = 'Other';
            } else {
              $scope.subtitle = _.capitalize($scope.subtitle);
            }
          }
          $scope.subtitle += ' Games';
        }

        $scope.subtitle = '';
        updateSubtitle();

        //Set up a watch on the options array, if this changes, we want to evaluate the options to see what should be displayed
        $scope.$watch(function (scope) {
            return scope.options;
          },
          updateSubtitle, true);
      }
    };
  });
