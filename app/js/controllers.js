/**
 * @ngdoc controller
 * @name myApp.controller:MyCtrl1
 * @description
 * # The controller used for getting data for a dynamic form.
 */

'use strict';

angular.module('myApp.controllers', []).

  controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {

        // set up the model object
        // for use in our template
        $scope.model = {};

        $scope.outgoing = {};

        $http({method: 'GET', url: 'js/data.json'}).
            success(function(data) {

                // setup the form object
                $scope.model.form = {};

                // save data on the form
                $scope.model.form.data = data;
            }).
            error(function(data, status, headers, config) {
                // do error
            });

  }])

