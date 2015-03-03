'use strict';
var app = angular.module('angularFromScratch', [
	'ngSanitize'
]);

app.controller('PrincipalCtrl',['$scope',function($scope){
	this.tituloApp = 'Hola AngularJS';
}]);

app.controller('ContactosCtrl',['$scope',function($scope){
	this.contactosArray = [
		{nombre: 'Axel', apellido: 'Salmeron', contacto: '@axulsr', thumb: '<span class="glyphicon glyphicon-user"></span>'},
		{nombre: 'Guillermo', apellido: 'Seminario', contacto: '@gjseminario', thumb: '<span class="glyphicon glyphicon-user"></span>'},
		{nombre: 'Alexander', apellido: 'Rondón', contacto: '@arondn2', thumb: '<span class="glyphicon glyphicon-user"></span>'},
		{nombre: 'José', apellido: 'Salazar', contacto: '@jslzrt', thumb: '<span class="glyphicon glyphicon-user"></span>'},
		{nombre: 'Marlys', apellido: 'Villafranca', contacto: '@MarlysitaV', thumb: '<span class="glyphicon glyphicon-user"></span>'},
		{nombre: 'Katrina', apellido: 'Ortiz', contacto: '@KatrinaOrtiz', thumb: '<span class="glyphicon glyphicon-user"></span>'}
	];
}]);