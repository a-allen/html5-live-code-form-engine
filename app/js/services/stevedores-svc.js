/**
 * @ngdoc service
 * @name myApp.service:stevedores
 * @description
 * # A constant service that serves as a HTML partial dictionary 
 * lookup used in the stevedore directive
 */

angular.module('myApp.services', []).factory('stevedores', [
    function () {
        'use strict';

        var baseDirectivePath = '/app/js/directives/stevedore/templates';

        return templates = {
            "text" : baseDirectivePath + '/text-ptl.html',
            "range" : baseDirectivePath + '/range-ptl.html',
            "text_matcher" : baseDirectivePath + '/matcher-input/matcher-input-ptl.html',
            "select" : baseDirectivePath + '/select-ptl.html',
            "textfield" : baseDirectivePath + '/textfield-ptl.html',
            "textarea" : baseDirectivePath + '/textarea-ptl.html',
            "zipcode" : baseDirectivePath + '/zipcode-ptl.html',
            "address" : baseDirectivePath + '/address-ptl.html',
            "birthdate" : baseDirectivePath + '/birthdate-ptl.html',
            "email" : baseDirectivePath + '/email-ptl.html',
            "phone_number" : baseDirectivePath + '/phone-number-ptl.html',
            "radio" : baseDirectivePath + '/radio-ptl.html'
        };

    }]);
