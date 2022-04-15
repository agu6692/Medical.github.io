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

var regexCampoNumerico=/^[0-9]+$/
var regexCampoTexto=/^[a-z][A-Z]+$/
var regexTelefono=/^[0-9]{4}-[0-9]{4}$/
var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/

function validar(){
    var error=false;
    var mensajesError="";

   
    if (document.getElementById("nombre").value =='') {
        error= true
        mensajesError+="<p>*Ingrese su nombre</p>"
    }
    
    if(!regexTelefono.test(document.getElementById("numero").value)){
        error=true;
        mensajesError+="<p>*Tiene que ingresar un telefono</p>";
    }
    if(!regexEmail.test(document.getElementById("mail").value)){
        error=true;
        mensajesError+="<p>*Tiene que ser un email valido</p>";
    }
    

    if(error){
        /*mostrar los mensajes de error*/
        document.getElementById("mensaje").innerHTML=mensajesError;
        
    }else{
        
    }
    return false;
}



const CANTIDAD =1000;

function contarCaracteres(){
	var caracteresEscritos= document.getElementById('consulta').value.length;
	var restantes= CANTIDAD-caracteresEscritos;
	if (restantes<500) {
		document.getElementById("caracteres").style.color="red";
	} else {
		document.getElementById("caracteres").style.color="black";
	}

	document.getElementById("caracteres").innerHTML=restantes;
}


