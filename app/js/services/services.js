'use strict';

/*
 * Demonstrate how to register services, in this case it is a simple value service.
 * In addition, all future services will be bound to a services module like so: "myApp.services"
 */
angular.module('myApp.services', []).value('version', '0.1');
