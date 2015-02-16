'use strict';

/*
 * Load the following modules as dependencies in this angular project
 *
 * ngRoute: angular routing service
 * angular-lodash: angular wrapper for the lodash helper function library
 *
 * filters: a collection of app specific filters
 * services: a collection of app specific services
 * directives: a collection of app specific directives
 * controllers: a collection of app specific controllers
 *
 * NOTE:
 * filters, services, controllers and directive files would
 * likely be architected differently if this were a production application.
 * Angular best practices are to break code into small single functionality files
 * instead of having all code in a single file.
 */

angular.module('myApp', [
  'ngRoute',
  'angular-lodash',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).

/*
 * Set up the applications routing and establish the controller
 * each view will use when a specific route is met
 */

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form-engine',
    {templateUrl: 'partials/form.html', controller: 'MainAppCTRL'
  });

  $routeProvider.otherwise({redirectTo: '/form-engine'});
}]);
