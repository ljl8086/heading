'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.animalsinfo',
  'myApp.animalsdispose',
  'myApp.version',
  'myApp.directives',
  'infinite-scroll',
]);

app.controller('rootctrl', ['$scope', function($scope){
    $scope.path = "Home Page";
}]);

app.
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}])
;
