'use strict';
angular.module('app.controladores', [])
.controller('PrincipalCtrl',['$scope',function($scope){
	
}])
.controller('ContactosCtrl',['$scope','$rootScope',function($scope,$rootScope){
	this.perfilActivo = -1;
	$rootScope.globales.seccionActual = 'Contactos';
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
}])
.controller('PerfilCtrl',['$scope','$rootScope',function($scope,$rootScope){
	this.perfil = '';
}])
.controller('AcercaDeCtrl',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.globales.seccionActual = 'Acerca de';
}]);
