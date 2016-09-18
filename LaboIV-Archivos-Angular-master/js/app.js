(function(){
	'use strict';

	angular
		.module('MiApp', ['ui.router', 'angularFileUpload'])
		.config(function($stateProvider, $urlRouterProvider){

			// Estado x defecto			
			$urlRouterProvider.otherwise("/inicio");

			$stateProvider
			    .state('inicio', {
			        url: "/inicio",
			        templateUrl: "./template/inicio.html",
			        controller: "FormController"
			    })
			    .state('cargarArchivo', {
			        url: "/cargarArchivo",
			        templateUrl: "./template/form.html",
			        controller: "FormController"
			    })
			    .state('drag', {
			        url: "/dragAndDrop",
			        templateUrl: "./template/drag.html",
			        controller: "FormController"
			    })
			    .state('completo', {
			        url: "/completo",
			        templateUrl: "./template/completo.html",
			        controller: "FormController"
			    })
		})
})();