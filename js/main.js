$(document).ready(function(){
    //menu icon toggler
    $('.navbar .navbar-toggler').on('click',function(){
        $('.navbar .navbar-toggler span').toggleClass('fas fa-times');
        // $('.navbar .navbar-nav').css('paddingBottom','50px');
    });

    //counter up
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });

    //accordion codes here
    $('#questions .questions-part .accordion .box label').on('click',function(){
        $(this).parent().toggleClass('dropDown').siblings().removeClass('dropDown');
    });

    //countdown js code starts here
    let currentYear = new Date().getFullYear();
    let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

    $('#h').countdown(nextYear, function(event){
        let d = $(this).html(event.strftime('%H'));
    });

    $('#m').countdown(nextYear, function(event){
        let d = $(this).html(event.strftime('%M'));
    });

    $('#s').countdown(nextYear, function(event){
        let d = $(this).html(event.strftime('%S'));
    });

    //wow js plugin
    new WOW().init();


    //custom jquery code for functionalities
    let backToTop = $('#backToTop');
    let logo = $('.navbar .navbar-brand');
    let menu = $('.navbar');
    let html_body = $('html,body');
    // let logo = $('');
      
    $(window).on('scroll',function(){
        let scrolling = $(window).scrollTop();
          
        //sticky menu function
        if(scrolling > 130){
            menu.addClass('fixedNav');
        }else{
            menu.removeClass('fixedNav');
        }
          
        //back To Top hide/show function
        if(scrolling > 500){
            backToTop.fadeIn();
        }else{
            backToTop.fadeOut();
        }
    });

    //back To Top click function
    backToTop.on('click',function(){
        html_body.animate({
            scrollTop : 0
        },1200);

    });

    //click on logo
    logo.on('click',function(){
        html_body.animate({
            scrollTop : 0
        },1200);

    });

    //smooth scroll and active menu button code
    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function(){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.length){
                html_body.animate({
                    scrollTop: target.offset().top - 0
                },1200);
                return false;
            }
        }
    });

    
    
});