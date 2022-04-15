document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('contenedor-calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
             {
                title: 'Vacuna 1',
                start: '2020-11-04',
                end:'2020-11-06'
            },
            {
                title: 'Vacuna 2',
                start: '2020-11-15',
            },
            {
                title: 'refuerzo',
                start: '2020-12-15'
            }
            ,
            {
                title: 'Vacuna 3',
                start: '2021-01-15'
            }
        ]
    }); 

    calendar.render();
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