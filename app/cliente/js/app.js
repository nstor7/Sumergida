(function(){
    var app = angular.module('sumergida',[
        'ngRoute',
        'sumergida.directives'
    ])
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'views/inicio.html'
        })
    }])
})()