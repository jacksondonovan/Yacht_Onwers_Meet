var app = angular.module('splashapp',['ngRoute'])
                 .config(function($routeProvider){
                   $routeProvider
                     .when('/signup',{
                       templateUrl: '/templates/signup.hbs'
                     })
                     .when('/login',{
                       templateUrl: '/templates/login.hbs'
                     })
                     .otherwise({
                       redirectTo: '/'
                     })
                 })
