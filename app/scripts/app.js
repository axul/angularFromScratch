'use strict';
var app = angular.module('angularFromScratch', [
	'ngRoute',
	'ngSanitize',
	'app.controladores'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/contactos', {templateUrl: 'views/contactos.html', controller: 'ContactosCtrl as contactos'});
	$routeProvider.when('/acercade', {templateUrl: 'views/acercade.html', controller: 'AcercaDeCtrl as acercade'});
	$routeProvider.otherwise({redirectTo: '/contactos'});
}]);

app.run(['$rootScope',function($rootScope){
	$rootScope.globales = {};
  	$rootScope.globales ={
  		tituloApp : 'Angular from scratch',
  		seccionActual : ''
  	};
}]);