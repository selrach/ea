angular.module('ea')
  .directive('gameListing', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing/gameListingHeader.directive.html',
      replace: true,
      scope: {
        options: '='
      },
      controller: function ($scope) {

      }
    };
  });
