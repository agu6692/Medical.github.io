$(document).ready(function () {
   $("#posadas").click(function () { 
       $(".popup").fadeIn();
       $("#dirrecion").empty();
       $("#localidad").empty();
       $("#dirrecion").append("Dirrecion : Avenida Presidente Arturo U. Illia 386");
       $("#localidad").append("Localidad: El Palomar, Provincia de Buenos Aires");
   });
   $("#pirovano").click(function () { 
    $(".popup").fadeIn();
    $("#dirrecion").empty();
    $("#localidad").empty();
    $("#dirrecion").append("Dirrecion : Av. Monroe 3555");
    $("#localidad").append("Localidad: CABA");
    }); 
    $("#garrahan").click(function () { 
    $(".popup").fadeIn();
    $("#dirrecion").empty();
    $("#localidad").empty();
    $("#dirrecion").append("Dirrecion : Pichincha 1890");
    $("#localidad").append("Localidad: CABA");
    });
      
   $("#cerrar").click(function () { 
       $(".popup").fadeOut();
   });
});

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