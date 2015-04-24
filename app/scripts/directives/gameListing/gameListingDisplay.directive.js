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
      controller: function () {

      }
    };
  });
