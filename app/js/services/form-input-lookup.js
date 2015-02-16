/*
 * A factory that returns an object used in our form engine directive
 * that stores references to individual form field partials
 */

angular.module('myApp.services', []).factory('formInputLookup', [
  function () {
    'use strict';

    /* Store a reference to our input templates */
    var baseDirectivePath = '/app/js/directives/form-engine/templates';

    /* Return an object that holds a key to each form input that could make up a HTML form */
    return {
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
