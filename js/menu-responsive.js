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

$(document).ready(function(){
            $('.slider').slick({
               
                autoplay: true,
                
            });
        });