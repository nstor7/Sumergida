(function(){
    angular.module('sumergida.directives',[])
    .directive('sumergidaHeader', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/sumergida-header.html'
        }
    })
    .directive('sumergidaFooter', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/sumergida-footer.html'
        }
    })
})()