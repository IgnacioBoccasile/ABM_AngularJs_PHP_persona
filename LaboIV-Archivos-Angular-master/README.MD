# ArchivosAngular
# Uso de File Upload

Ejemplo de la carga de archivos usando Angularjs, el modulo Angular File Upload y Bootstrap.

Documentacion de File Upload: https://github.com/nervgh/angular-file-upload/wiki/Module-API.<br>
Documentacion de Angularjs: https://docs.angularjs.org/api.<br>
Documentacion de Bootstrap: http://getbootstrap.com/components/.

# USO BASICO
**1**- Descargar el modulo File Upload y cargarlo en el index.html.
```html
<script src="bower_components/angular-file-upload/dist/angular-file-upload.min.js"></script>
```
**2**- Incluir la dependencia 'angularFileUpload' en mi modulo angular.
```javascript
angular.module('MiApp', ['ui.router', 'angularFileUpload']);
```
**3**- Inyectar 'FileUploader' en el controlador.
```javascript
angular
  .module('MiApp')
  .controller('FormController', ['$scope', 'FileUploader', 
    function($scope, FileUploader){
		
  }]);
```
**4**- Si queremos tener la vista previa de los archivos crear la directiva "ngThumb".

**5**- Inicializar el uploader en mi controlador: 
```javascript
	$scope.uploader = new FileUploader({url: 'php/upload.php'})
```

**6**- Creamos el archivo upload.php que es el que se encarga de cargar los archivos.
```php

if ( !empty( $_FILES ) ) {
    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
    // Setear el path a la carpeta donde se cargaran los archivos
    $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'img' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];
    move_uploaded_file( $tempPath, $uploadPath );
    $answer = array( 'answer' => 'Archivo Cargado!' );
    $json = json_encode( $answer );
    echo $json;
} else {
    echo 'No se cargo el archivo';
}

```
**7**- En el form html crear un input tipo "file" con la directiva nvFileSelect y el uploader:
```html
	<input type="file" nv-file-select uploader="uploader"/>.
	<!-- 
	Para cargar varios archivos juntos agregar la directiva "multiple":
	-->
	<input type="file" nv-file-select uploader="uploader" multiple/>.
	<!-- 
	Si quiero usar drag and drop uso las directivas nvFileDrop y nvFileOver.
	-->
	<div nv-file-drop="" uploader="uploader">
        	<div nv-file-over="" uploader="uploader" over-class="another-file-over-class" class="well my-drop-zone">
        		Drop zone
		</div>
	</div>
```

**8**- Recorremos la propiedad queue para tener los datos e imagen de los archivos.
```html
    <ul>
		<!-- Muestro los datos de los archivos a cargar -->
        <li ng-repeat="item in uploader.queue">
        	<!-- nombre del archivo -->
            Archivo: <span ng-bind="item.file.name"></span><br/>
            <!-- imagen del archivo -->
            <div ng-show="uploader.isHTML5" ng-thumb="{ file: item._file, height: 100 }"></div>
            <!-- boton upload. Lo puedo usar para carar las fotos o crear
            	mi propia funcion y llamar a uploader.uploadAll() -->
            <!-- <button type="button" class="btn btn-success btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess">
                <span class="glyphicon glyphicon-upload"></span> Upload
            </button> -->

            <!-- boton cancel -->            
            <button type="button" class="btn btn-warning btn-xs" ng-click="item.cancel()" ng-disabled="!item.isUploading">
                <span class="glyphicon glyphicon-ban-circle"></span> Cancel
            </button>

            <!-- boton remove -->
            <button type="button" class="btn btn-danger btn-xs" ng-click="item.remove()">
                <span class="glyphicon glyphicon-trash"></span> Remove
            </button>
        </li>		
    </ul>
```
**9**- Para cargar los archivos tenemos dos maneras:<br>
	**a**- Recorrermos la propiedad uploader.queue, que tiene los archivos a cargar, y usamos los metodos de c/u:
		remove(), upload() y cancel()*.<br>
	**b**- Utilizamos los metodos del uploader:
		uploadAll(), cancelAll(), uploadItem(item), cancelItem(item)*.<br>
	* Ver en la documentacion todas las propiedades, metodos y callbacks disponibles.

