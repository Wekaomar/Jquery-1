
//Nav

$(".open").click(function(){

        $('.menu').animate({width : '230px'},100)
    })



$(".close").click(function(){
    $(".menu").animate({ width:'0px'},100)
})

//Singers

$('#singers .number').click(function(){
    $('.Brief').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
});

//counter

$(document).ready(function() {
    var endDate = new Date('December 31, 2024 23:59:59').getTime();
  
    var timer = setInterval(function() {
      var now = new Date().getTime();
      var distance = endDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      $(".day").html(`${days} D`);
      $(".hour").html(`${hours} h`);
      $(".minute").html(`${ minutes } m`);
      $('.second').html(`${ seconds} s`)  
      if (distance < 0) {
        clearInterval(timer);
        $('#countdown').html("EXPIRED");
      }
    }, 1000);
  });


