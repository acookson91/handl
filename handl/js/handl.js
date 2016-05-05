var handlApp = angular.module("handlApp", ["ngRoute","ngResource"]);

handlApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "/js/templates/home.html",
      controller: 'deliveriesController'
    })
    .when("/deliveries/new", {
      templateUrl: "/js/templates/deliveries/new.html",
      controller: "newDeliveryController"
    })
    .when("/deliveries", {
      templateUrl: "/js/templates/deliveries/index.html",
      controller: "deliveriesController"
    })
    .when("/deliveries/:id", {
      templateUrl: "/js/templates/deliveries/show.html",
      controller: "deliveryController"
    });
}]);
