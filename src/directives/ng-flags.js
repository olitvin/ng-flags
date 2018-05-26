angular.module('ngFlag', []).
directive('flag', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<span><span class="flag {{::country|lowercase}}"></span></span>',
        scope: {
            country: '=',
            size: '='
        },
        link: function(scope, elm) {
            // Default flag size
            if (!scope.size) {
                scope.size = 16;
            }

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
