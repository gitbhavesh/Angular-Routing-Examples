var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider

    .when('/',{
        template:'Welcome User'

    })
    .when('/anotherpage',{
        template:'Welcome'
    })
    .otherwise({
        redirectTo:'/'
    });
});
