



// menu botoes  

$(".menu-abrir").click(function(){
   
   $("html").addClass("menu-ativo");

});
  
  $(".menu-fechar").click(function(){
     $("html").removeClass("menu-ativo");
  
     
});
       
          $("html").click(function(event) {
          
            if(event.target === this) { 
          $("html").removeClass("menu-ativo");
        }
      });    

/*display*/

/*$(".header-portfolio").click(function(){
        $(".portfolio ").toggle(1000);  
});

$(".sobre").click(function(){
        $(".row").toggle(1000);  
});


window.setTimeout(myFunction, 3000);

          function myFunction() {
      //  $(".row").hide(1000);
        //     $(".conteudo").hide(1000);
}*/
 
        
  



//----------

 // portfolio
 $('.gallery ul li a').click(function() {
     $('html').addClass('item_open');
    var itemID = $(this).attr('href');
     $(itemID).addClass('item_open');
   
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
    
 });

 $(".gallery ul li a").click(function() {
     $('html').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });

// --------------scroll para o  top
     
var scrollTop = $(".scrollTop");

$(window).scroll(function(){
    var posicao = $(this).scrollTop();
  
  if( posicao >600 ){
    $(scrollTop).css("opacity", 1);
  } else{
    $(scrollTop).css("opacity", 0);
  } 
       
    
});

// animando scrolltop
                   
  $(".sobre").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
                   
 });                  

$(".header-portfolio").click(function() {
    $('html, body').animate({
      scrollTop: 800
    }, 800);            
 });


 $(".contato").click(function() {
    $('html, body').animate({
      scrollTop: 1600
    }, 800);                
 });

 $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
 });

// ____________header color scrolltop_class


$(document).ready(function(){
  $(window).scroll(function() {
    
    if ($(document).scrollTop() < 600) {
      $(".li1").addClass("test");
    } else {
      $(".li1").removeClass("test");
    };
    
      if (($(document).scrollTop() > 600) && ($(document).scrollTop() < 1200)) {
      $(".li2").addClass("test");
    } else {
      $(".li2").removeClass("test");
    };
    
    if ($(document).scrollTop() > 1300) {
      $(".li3").addClass("test");
    } else {
      $(".li3").removeClass("test");
    };
    
  });
});