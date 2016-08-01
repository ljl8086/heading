'use strict';

angular.module('myApp.animalsdispose', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/animalsdispose', {
    templateUrl: 'animals/animalsdispose.html',
    controller: 'AnimalsdisposeCtrl'
  });
}])

.controller('AnimalsdisposeCtrl', ['$scope','$route',function($scope,$route) {
	$scope.$parent.path = "animalsdispose";
	$scope.$parent.pathinfo = "无害化处理";
	console.info($route.current.originalPath);
}]);
