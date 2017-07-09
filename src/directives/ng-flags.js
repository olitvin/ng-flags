/**
 * ng-flags module
 * Turns country ISO code to flag thumbnail.
 *
 * Author: asafdav - https://github.com/asafdav
 */
angular.module('ngFlag', []).
directive('flag', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<span><span class="flag {{::country}}"></span></span>',
        scope: {
            country: '=',
            size: '='
        },
        link: function(scope, elm, attrs) {
            // Default flag size
            if (!scope.size) {
                scope.size = 16;
            }

            var $unwatchC = scope.$watch('country', function(value) {
                scope.country = angular.lowercase(value);
                if (value) {
                    $unwatchC();
                }
            });

            var $unwatchS = scope.$watch('size', function(value) {
                scope.size = value;
                if (value) {
                    $unwatchS();
                }
                elm.addClass('f' + scope.size);
            });
        }
    };
});
