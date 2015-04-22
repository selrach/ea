angular.module('ea')
  .directive('gameListingHeader', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/gameListing/gameListingHeader.directive.html',
      replace: true,
      scope: {
        options: '='
      },
      controller: function ($scope) {
        $scope.subtitle = '';
        updateSubtitle();

        //Set up a watch on the options array, if this changes, we want to evaluate the options to see what should be displayed
        $scope.$watch(function (scope) {
            return scope.options;
          },
          updateSubtitle)

        /**
         * Updates the subtitle based on some simple rules.  These business rules could be coming from the server
         */
        function updateSubtitle() {
          if (_.isEmpty($scope.options)) {
            $scope.subtitle = 'All';
          } else {
            $scope.subtitle = $scope.options['genre'] || $scope.options['platform'] || $scope.options['franchise'];
            if(_.isEmpty($scope.subtitle)) {
              $scope.subtitle = 'Other';
            } else {
              $scope.subtitle = _.capitalize($scope.subtitle);
            }
          }
          $scope.subtitle += ' Games';
        }
      }
    };
  });
