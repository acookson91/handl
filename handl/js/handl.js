var handlApp = angular.module("handlApp", ["ngRoute","ngResource"]);

handlApp.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  return $routeProvider
    .when("/", {
      templateUrl: "/js/templates/home.html",
      controller: 'mainHandlr'
    })
    .when("/delivery-form", {
      templateUrl: "/js/templates/delivery-form.html",
      controller: "mainHandlr"
    });
});