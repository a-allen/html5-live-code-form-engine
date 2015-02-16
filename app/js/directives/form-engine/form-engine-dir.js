angular.module('myApp.directives', [])

  .directive('formInput', ['$http', '$compile', 'formInputLookup', function ($http, $compile, formInputLookup) {
    'use strict';

    /* getTemplateUrl
     *
     * @field: string, an identifier that is used to select the
     * appropriate key in the form input lookup object
     *
     * this function returns a path that we can use in a GET request
     * so we can retrieve the appropriate HTML partial and compile it to the directive
     *
     */

    var getTemplateUrl = function (data) {

        var template = '';

        try {
          template = formInputLookup[data]; // use the formInputLookup service injected above as an object
        }

        catch (err) {
          console.log('there was an error loading the form =>', err);
        }
        return template;
      },

      /* linkFunction
       *
       * @scope: object, the directives scope object
       * @element: object, references to the DOM object used in the directive
       *
       */

      linkFunction = function (scope, element) {

      /* options are only used for select boxes.
       *
       * if we're not dealing with a select input then
       * set the options property to an empty object
       *
       */

        scope.options = scope.data.options || {};

        var type = scope.data.type, // the type of input we are dealing with

            templateUrl = getTemplateUrl(type), // the path to the inputs HTML partial

            tags = scope.data.tag; // a reference to the tag name

        $http.get(templateUrl).success(function (data) {
          element.html(data);
          $compile(element.contents())(scope);
        });

        scope.key = tags;

        // start to build the unique dynamic key name
        if (type !== "range") {

          try {

            var key = "",
                id = Math.floor(Math.random() * 1000),
                newKey = scope.key.split(" ");

            angular.forEach(newKey, function (val, index) {

              key += (index === 0)
                ? val.charAt(0).toLowerCase() + val.slice(1)
                : val.charAt(0).toUpperCase() + val.slice(1);

            });

            // append an ID to the key name for uniqueness
            key += '_' + id;

            scope.key = key;

            // set the dynamic key/value pair on the 'payload' object
            scope.payload[key] = scope.data.value;
          }
          catch (err) {
            console.log('\t error', err);
          }

        }

      };

    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        data: '=', /* scope.data: bi-directional binding that uses data from the view */
        payload: '=' /* scope.payload: object, 1:1 mapping to the rendered HTML form */
      },
      link: linkFunction
    };
  }
  ]);