var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider

    .when('/',{
        templateUrl:'page.html'

    })
    .when('/Hellouser',{
        templateUrl:'welcome.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});
