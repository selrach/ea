angular.module('ea')
  .directive('gameListing', function () {
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
