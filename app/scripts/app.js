'use strict';
var app = angular.module('angularFromScratch', [
	'ngSanitize'
]);

app.controller('PrincipalCtrl',['$scope',function($scope){
	this.tituloApp = 'Hola AngularJS';
}]);

app.controller('ContactosCtrl',['$scope',function($scope){
	this.perfilActivo = -1;

	this.contactosArray = [
		{nombre: 'Axel', apellido: 'Salmeron', contacto: '@axulsr',
		icon: '<span class="glyphicon glyphicon-user"></span>',
		thumb:''},

		
		{nombre: 'Guillermo', apellido: 'Seminario', contacto: '@gjseminario',
		icon: '<span class="glyphicon glyphicon-user"></span>',
		thumb:''},		
		
		{nombre: 'Alexander', apellido: 'Rondón', contacto: '@arondn2',
		icon: '<span class="glyphicon glyphicon-user"></span>',
		thumb:''},
		
		{nombre: 'José', apellido: 'Salazar', contacto: '@jslzrt',
		icon: '<span class="glyphicon glyphicon-user"></span>',
		thumb:''},
		
		{nombre: 'Marlys', apellido: 'Villafranca', contacto: '@MarlysitaV',
		icon: '<span class="glyphicon glyphicon-user"></span>',
		thumb:''},
		
		{nombre: 'Katrina', apellido: 'Ortiz', contacto: '@KatrinaOrtiz',
		icon: '<span class="glyphicon glyphicon-user"></span>',
		thumb:''}
	];

	this.mostrarPerfil = function(indice){
		this.perfilActivo = indice;
	};

	this.isPerfilActivo = function(){
		return (this.perfilActivo==-1) ?  false : true;
	};
}]);

app.controller('PerfilCtrl',['$scope',function($scope){
	this.perfil = '';
}]);