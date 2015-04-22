angular.module('ea')
  .directive('gameListingFilter', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing/gameListingFilter.directive.html',
      replace: true,
      scope: {
        options: '='
      },
      controller: function ($scope) {

      }
    };
  });
