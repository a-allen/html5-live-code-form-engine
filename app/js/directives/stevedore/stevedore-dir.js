angular.module('myApp.directives', [])

    .directive('stevedoreForm', ['$http', '$compile', 'stevedores',
    function ($http, $compile, stevedores) {
        'use strict';

        function getTemplateUrl(field) {

            var template = null;

            try {
                template = stevedores[field];
            }

            catch(err) {
                console.log('err =>', err);
            }
            return template;
        }

        var linkFunction = function(scope, element) {

            scope.options = scope.field.options || null;

            // get template content from the input type
            var type = scope.field.type;
            var templateUrl = getTemplateUrl(type);

            $http.get(templateUrl).success(function(data) {
                element.html(data);
                $compile(element.contents())(scope);
            });

            var tags = scope.field.tag;

            // build the key from the form tag ontology
            (_.isArray(tags))
                ? scope.key = tags.join("|") // we have an array of tags, join
                : scope.key = tags; // no array, just use the tag as is

            var GUID = function() {
                var _id = Math.floor(Math.random() * 1000);
                return _id;
            };

            // start to build the unique dynamic key name
            if (type !== "range") {
                try {
                    var key = "",
                        id = Math.floor(Math.random() * 1000),
                        split = scope.key.split(" ");

                    angular.forEach(split, function(val, index) {
                        var n = (index === 0)
                            ? val.charAt(0).toLowerCase() + val.slice(1)
                            : val.charAt(0).toUpperCase() + val.slice(1);
                        key += n;
                    });

                    // append an ID to the key name for uniqueness
                    key += '_' + id;

                    // we need to be able to reference this on the scope
                    scope.key = key;

                    // set the dynamic key/value pair on the 'outgoing' object
                    scope.outgoing[key] = scope.field.value;
                }
                catch (err) {
                    console.log('\t || ERR->', err);
                }


            } else  {

                var key1 = scope.key + '_' + GUID(),
                    key2 = scope.key + '_' + GUID();

                // we need to be able to reference this on the scope
                scope.key1 = key1;
                scope.key2 = key2;

                // set the dynamic key/value pair on the 'outgoing' object
                scope.outgoing[key1] = scope.field.options[0].value;
                scope.outgoing[key2] = scope.field.options[1].value;
            }

            // set message var for errors
            var messages = scope.messages;
        };

        return {
            template: '<div>{{field}}</div>',
            restrict: 'E',
            scope: {
                field:'=',
                key: '&',
                messages: '=',
                outgoing: '=',  // the object in which all form models are scoped to
                options: '&'    // options used for radios and select boxes
            },
            link: linkFunction
        };
    }
]);