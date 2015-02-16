'use strict';

angular.module('myApp.controllers', []).

  /*
   * 'MainAppCTRL' will use the $scope and $http Angular services.
   * The services are injected below using dependency injection and are annotated
   * so we can safely concatenate and minify JS at a later date.
   */

  controller('MainAppCTRL', ['$scope', '$http', function($scope, $http) {

    /* Define an empty object for the form definition to live in */
    $scope.model = {};

    /*
     * Define an empty object for our bound form to live in.
     * This will be a 1:1 mapping of the view form fields and their representative data.
     */
    $scope.outgoing = {};

    /*
     * Ues the Angular $http service to make an AJAX call to get the data for our form.
     * The mock json data is found at 'js/data.json'
     */

    $http({method: 'GET', url: 'js/data.json'}).
      success(function(data) {

        /* Define a form object on $scope.model */
        $scope.model.form = {};

        /* Set the response to the form object */
        $scope.model.form.data = data;
      }).

      /* If there is an error with the request this code will run */

      error(function(data, status, headers, config) {
        console.log('There was an error =>', data, status, headers, config);
      });

  }]);

