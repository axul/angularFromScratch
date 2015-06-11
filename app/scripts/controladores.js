'use strict';
angular.module('app.controladores', [])
.controller('PrincipalCtrl',['$scope',function($scope){
	
}])
.controller('ContactosCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
	this.perfilActivo = -1;
	$rootScope.globales.seccionActual = 'Contactos';

	$http.get('data/contactos.json').success(function (data) {
		$scope.contactosArray = data;
	});

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
