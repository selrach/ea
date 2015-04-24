'use strict';

/**
 * @ngdoc function
 * @name ea.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ea angular application.  Hers is where initialization happens, more than likely we should be
 * leveraging an injected service to manage the fetching of filters and the game list, but that's a bit of overkill here.
 */
angular.module('ea')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.gameList = []; // Container for all the games available to display.
    $scope.filters = {}; // We are letting the server determine the filters available.

    var local_hack = true; // This is just because local files don't work with $http in any browser

    /**
     * This is just a shortcut to use an already curated json value blob...that said since there is less than 700, this is pretty small in size.
     * @returns the promise associated with the request.
     */
    function getGameListing() {
      if (local_hack) {
        $scope.gameList = faux_server['app/gamelist.json'];
      } else {
        return $http.get('gamelist.json').success(function (result) {
          $scope.gameList = result;
          return result;
        });
      }
    }

    /**
     * Shortcut to grab a set of server determined filters.
     * @returns the promise associated with the request.
     */
    function getFilterOptions() {
      if (local_hack) {
        $scope.filters = faux_server['app/filters.json'];
      } else {
        return $http.get('filters.json').success(function (result) {
          $scope.filters = result;
          return result;
        });
      }
    }

    getGameListing();
    getFilterOptions();
  }
)
;
