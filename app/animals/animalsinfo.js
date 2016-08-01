'use strict';

angular.module('myApp.animalsinfo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/animalsinfo', {
    templateUrl: 'animals/animalsinfo.html',
    controller: 'AnimalsinfoCtrl'
  });
}])

.controller('AnimalsinfoCtrl', ['$scope','$route',function($scope,$route) {
	$scope.$parent.path = "animalsinfo";
	$scope.$parent.pathinfo = "无害化处理";
	console.info($route.current.originalPath);
}]);
