(function(){
	'use strict';

	angular
		.module('MiApp')
		.controller('FormController', ['$scope', 'FileUploader', 
			function($scope, FileUploader){

			/***********************************************
			*  Inicializo el uploader y le indico quien    *
			*  va a gestionar la subida del archivo.       *
			*  en este caso sera upload.php                *
			***********************************************/
			$scope.uploader = new FileUploader({url: 'php/upload.php'});
			$scope.uploader.queueLimit = 10; // indico cuantos archivos permito cargar
						
			/* Si quiero restringir los archivos a imagenes añado este filtro */
			$scope.uploader.filters.push({
	            name: 'imageFilter',
	            fn: function(item, options) {
	                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
	                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
	            }
	        });

	        /** funcion para mi boton cargar si quiero agregar funcionalidad, 
	         de lo contrario uso el item.upload() en la vista **/
	        $scope.cargar = function(){
	        	/** llamo a la funcion uploadAll para cargar toda la cola de archivos **/
	        	$scope.uploader.uploadAll();
	        	/** agrego mi funcionalidad **/

	        }
			/***********************************************
			*  Funciones callbacks que nos dan informacion *
			*  en el proceso de carga de archivos          *
			***********************************************/

			// $scope.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
			//     console.info('onWhenAddingFileFailed', item, filter, options);
			// };
	  //       $scope.uploader.onAfterAddingFile = function(fileItem) {
	  //           console.info('onAfterAddingFile', fileItem);
	  //       };
	  //       $scope.uploader.onAfterAddingAll = function(addedFileItems) {
	  //           console.info('onAfterAddingAll', addedFileItems);
	  //       };
	  //       $scope.uploader.onBeforeUploadItem = function(item) {
	  //           console.info('onBeforeUploadItem', item);
	  //       };
	  //       $scope.uploader.onProgressItem = function(fileItem, progress) {
	  //           console.info('onProgressItem', fileItem, progress);
	  //       };
	  //       $scope.uploader.onProgressAll = function(progress) {
	  //           console.info('onProgressAll', progress);
	  //       };
	  //       $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
	  //           console.info('onSuccessItem', fileItem, response, status, headers);
	  //       };
	        $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
	            console.info('onErrorItem', fileItem, response, status, headers);
	        };
	  //       $scope.uploader.onCancelItem = function(fileItem, response, status, headers) {
	  //           console.info('onCancelItem', fileItem, response, status, headers);
	  //       };
	  //       $scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
	  //           console.info('onCompleteItem', fileItem, response, status, headers);
	  //       };
	        $scope.uploader.onCompleteAll = function() {
	            console.info('Se cargo con exito');
	        };
		}]); // END CONTROLLER
})();