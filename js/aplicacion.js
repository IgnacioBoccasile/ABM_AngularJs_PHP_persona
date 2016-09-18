var miAplicacion = angular.module("AngularABMBoccasile", ['ui.router']);

miAplicacion.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
	        .state("/inicio", 
	      	{
	      		url:"/inicio", 
	      		templateUrl: "inicio.html", 
	      		controller:"controlInicio"
	      	})

	      	.state("/persona", 
	      	{
	      		url:"/persona",
	      		abstract:true, 
	      		templateUrl: "abstractPersona.html", 
	      		controller:"controlPersona"
	      	})

	      	.state("/persona.menu", 
	      	{
	      		url:"/menu",
	      		views:{
	      			'contenido':{
	      				templateUrl:"personamenu.html",
	      				controller:"controlPersonaMenu"
	      			}
	      		} 
	      	})

	      	.state("/persona.alta", 
	      	{
                url:"/menu/alta",
                views:{
                	'contenido':{
                		templateUrl:"personaalta.html",
                		controller:"controlPersonaAlta"
                	}
                }
	      	})

	      	.state("/juegos", 
	      	{
	      		url:"/juegos",
	      		abstract:true,
	      		templateUrl:"abstractJuegos.html",
	      		controller:"controlJuegos"
	      	})

            .state("/juegos.menu", 
            {
            	url:"/menu",
            	views:{
            		'contenido':{
            			templateUrl:"juegosInicio.html",
    					controller:"controlJuegosInicio"
            		}
            	}	
            })

            .state("/juegos.adivina1",
            {
            	url:"/menu/adivinaElNumero1",
            	views:{
            		'contenido':{
            			templateUrl:"AdivinaElNumero1.html",
            			controller:"controlAdivinaElNumero1"
            		}
            	}
            })

            .state("/juegos.adivina2",
            {
            	url:"/menu/adivinaElNumero2",
            	views:{
            		'contenido':{
            			templateUrl:"AdivinaElNumero2.html",
            			controller:"controlAdivinaElNumero2"
            		}
            	}
            })

            .state("/juegos.piedraPapelTijera", 
            {
            	url:"/menu/piedraPapelTijera",
            	views:{
            		'contenido':{
            			templateUrl:"PiedraPapelTijera.html",
            			controller:"controlPiedraPapelTijera"
            		}
            	}	
            })
	      		
	      $urlRouterProvider.otherwise("/inicio");	

});

miAplicacion.controller("controlInicio", function($scope){

			

});

miAplicacion.controller("controlPersona", function($scope){



});

miAplicacion.controller("controlPersonaMenu", function($scope, $state){

$scope.irAlAlta = function()
{
	$state.go('/persona.alta');
}

});

miAplicacion.controller("controlPersonaAlta", function($scope){



});

miAplicacion.controller("controlJuegos", function($scope){


});

miAplicacion.controller("controlJuegosInicio", function($scope, $state){

	$scope.irAdivina1 = function()
	{
		$state.go('/juegos.adivina1');
	}

	$scope.irAdivina2 = function()
	{
		$state.go('/juegos.adivina2');
	}

	$scope.irPPT = function()
	{
		$state.go('/juegos.piedraPapelTijera');
	}	
})


miAplicacion.controller("controlAdivinaElNumero1", function($scope){

	var contadorIntentos;
	var numeroSecreto;

	$scope.comenzar = function()
	{
		contadorIntentos=0;
	    document.getElementById('intentos').value=contadorIntentos;
	    numeroSecreto=Math.floor((Math.random() * 100) + 1); 
	}

    $scope.verificar = function()
    {
    	contadorIntentos=contadorIntentos+1;
	    document.getElementById('intentos').value=contadorIntentos;
	    var numeroIngresado=document.getElementById('numero').value;
	    
	    if(numeroSecreto==numeroIngresado)
	    {
	    	alert("Adivinaste!!! lo hiciste en "+contadorIntentos+" intentos");
	    }

	    else
	    {
	    	if(numeroSecreto<numeroIngresado)
	    	{
	    		alert("Menos!!");
	    	}

	    	else
	    	{
	    		alert("Mas!!");
	    	}
	    }
    }

});

miAplicacion.controller("controlAdivinaElNumero2", function($scope){

	var numeroSecreto; 
	var contadorIntentos;
	
	$scope.comenzar = function()
	{
		contadorIntentos=0;
		document.getElementById('intentos').value=contadorIntentos;
		numeroSecreto=Math.floor((Math.random() * 100) + 1);
	}
	
	$scope.verificar = function()
	{
		contadorIntentos=contadorIntentos+1;
		document.getElementById('intentos').value=contadorIntentos;
		var numeroIngresado=document.getElementById('numero').value;
    
		if(numeroSecreto==numeroIngresado)
		{
			if(contadorIntentos == 1)
			{
				alert("usted es psiquico");
			}
		
			if(contadorIntentos == 2)
			{
				alert("excelente percepcion");
			}
		
			if(contadorIntentos == 3)
			{
				alert("Esto es suerte");
			}
		
			if(contadorIntentos == 4)
			{
				alert("Excelente Tecnica");
			}
		
			if(contadorIntentos == 5)
			{
				alert("usted esta en la media");
			}
		
			if(contadorIntentos >= 6 && contadorIntentos <= 10)
			{
				alert("falta tecnica");
			}
		
			if(contadorIntentos > 10)
			{
				alert("afortunado en el amor!!");
			}
			
			contadorIntentos--;
		}
	
		else
		{
			if(numeroSecreto<numeroIngresado)
			{
				alert("Menos!!");
			}
		  
			else
			{
				alert("Mas!!");
			}
		}	
	}
});

miAplicacion.controller('controlPiedraPapelTijera', function($scope){

	var eleccionMaquina;

	$scope.comenzar = function()
	{
		eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	}

	$scope.piedra = function()
	{
		switch(eleccionMaquina)
		{
			case 1:
			     alert("Empato");
			     break;

			case 2:
			     alert("Perdio");
			     break;

			case 3:
			     alert("Gano");
			     break;
		}
	}

	$scope.papel = function()
	{
		switch(eleccionMaquina)
		{
			case 1:
			     alert("Gano");
			     break;

			case 2:
			     alert("Empato");
			     break;

			case 3:
			     alert("Perdio");
			     break;
		}
	}

	$scope.tijera = function()
	{
		switch(eleccionMaquina)
		{
			case 1:
			    alert("Perdio");
			     break;

			case 2:
			     alert("Gano");
			     break;

			case 3:
			     alert("Empato");
			     break;
		}
	}
});



