'use strict';
var app = angular.module('angularFromScratch', []);

app.controller('Principal',['$scope',function($scope){
	this.tituloApp = 'Hola AngularJS';
}]);