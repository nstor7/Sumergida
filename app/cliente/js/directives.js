(function(){
    angular.module('sumergida.directives',[])
    .directive('sumergidaHeader', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/sumergida-header.html'
        }
    })
    .directive('sumergidaSocial', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/sumergida-social.html'
        }
    })
    .directive('sumergidaFooter', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/sumergida-footer.html'
        }
    })
})()