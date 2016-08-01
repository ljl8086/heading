'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$route',function($scope,$route) {
	$scope.$parent.path = "home";
	$scope.$parent.pathinfo = "首页";
	console.info($route.current.originalPath);
}]);
