'use strict';


'use strict';

angular.module('ea')
  .directive('gameListingDisplay', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing/gameListingDisplay.directive.html',
      scope: {
        gameList: '='
      },
      controller: function ($scope) {

      }
    };
  });
