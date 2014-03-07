var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})