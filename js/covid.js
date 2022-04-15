
$(document).ready(function(){
  $(".desplegable").click(function(){
      if($('.barra-inferior-nav').is(":visible")){
          $('.barra-inferior-nav').slideUp();
      }else{
        $('.barra-inferior-nav').slideDown();
      }
    });
$(window).resize(function(){
    if($(this).width()>768){
        $(".barra-inferior-nav").show();
    } else{
        $(".barra-inferior-nav").hide();
    }
});
});

    function revisarRadio(nombreRadio){
    	var opciones=document.getElementsByName(nombreRadio);
    //recorrer
   		 for (i in opciones){
    		if (opciones[i].value=="si"&&opciones[i].checked) {
    			return 1;
    		}
    	} return 0;
    }

function validar(){
	var contadorDeSintomas=0;
	var error = false;
	var mensajeError="";
	if (document.getElementById("nombre").value =='') {
		error= true

		mensajeError+="<p>*Ingrese su nombre y apellido</p> "
	}
	if (document.getElementById("dni").value.length == 0) {
		error= true
		mensajeError+="<p>*Ingrese su dni</p>"
	}
	if (document.getElementById("telefono").value.length == 0) {
		error= true
		mensajeError+="<p>*Ingrese su telefono</p>"
	}
	//"fiebre","cabeza","tos", "garganta" "respirar"
	contadorDeSintomas+=revisarRadio("fiebre");
	contadorDeSintomas+=revisarRadio("cabeza");
	contadorDeSintomas+=revisarRadio("tos");
	contadorDeSintomas+=revisarRadio("garganta");
	contadorDeSintomas+=revisarRadio("respirar");
	if (error) {
		document.getElementById("mensaje").innerHTML=mensajeError;
		return false

	}	else {
		//mensaje exitoso
		document.getElementById("mensaje").innerHTML="El formulario fue completado correctamente. "+contadorDeSintomas+" síntomas de COVID-19 fueron registrados";
		return false;
	}
}

function cambiar(nombreRadio, nombreSelect){
  var opciones=document.getElementsByName(nombreRadio);
    //recorrer
   		 for (i in opciones){
    		if (opciones[i].value=="si"&&opciones[i].checked) {
    			document.getElementById(nombreSelect).style.display="block";
    		}
    

    		if (opciones[i].value == "no" && opciones[i].checked) {
    			document.getElementById(nombreSelect).style.display="none";

    		}
		}
	
			
    }






/*	var opciones =document.getElementById("sexo");
		var seleccionado=false;
	for (i in opciones) {
		if (opciones[i]) {
			seleccionado=true
		}
		
	}
	if (!seleccionado) {
		error= true
		mensajeError+="<p>tiene que elegir el sexo</p>"	
	}*/