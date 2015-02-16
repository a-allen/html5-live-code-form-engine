/*
 * A factory that returns an object used in our form engine directive
 * that stores references to individual form field partials
 */

angular.module('myApp.services', []).factory('formInputLookup', [
  function () {
    'use strict';

    /* Store a reference to our input templates */
    var baseDirectivePath = '/js/directives/form-engine/templates';

    /* Return an object that holds a key to each form input that could make up a HTML form */
    return {
      "text" : baseDirectivePath + '/text-ptl.html',
      "select" : baseDirectivePath + '/select-ptl.html',
      "textarea" : baseDirectivePath + '/textarea-ptl.html'
    };

  }]);
