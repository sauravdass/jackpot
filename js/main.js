$(document).ready(function () {
    //menu icon toggler
    $('.navbar .navbar-toggler').on('click', function () {
        $('.navbar .navbar-toggler span').toggleClass('fas fa-times');
    });

    //counter up
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });

    //accordion codes here
    $('#questions .questions-part .accordion .box label').on('click', function () {
        $(this).parent().toggleClass('dropDown').siblings().removeClass('dropDown');
    });

    //countdown js code starts here
    let currentYear = new Date().getFullYear();
    let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

    $('#h').countdown(nextYear, function (event) {
        let d = $(this).html(event.strftime('%H'));
    });

    $('#m').countdown(nextYear, function (event) {
        let d = $(this).html(event.strftime('%M'));
    });

    $('#s').countdown(nextYear, function (event) {
        let d = $(this).html(event.strftime('%S'));
    });

    //wow js plugin
    new WOW().init();


    //custom jquery code for functionalities
    let backToTop = $('#backToTop');
    let logo = $('.navbar .navbar-brand');
    let menu = $('.navbar');
    let html_body = $('html,body');

    $(window).on('scroll', function () {
        let scrolling = $(window).scrollTop();

        //sticky menu function
        if (scrolling > 130) {
            menu.addClass('fixedNav');
        } else {
            menu.removeClass('fixedNav');
        }

        //back To Top hide/show function
        if (scrolling > 500) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
    });

    //back To Top click function
    backToTop.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1200);

    });

    //click on logo
    logo.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1200);

    });

    //smooth scroll and active menu button code
    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1200);
                return false;
            }
        }
    });

});


// javaScript code starts here//

//signup form validation starts
// variable declaration
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let confirmPass = document.getElementById('cPass');
let fnameErr = document.getElementById('fnameErr');
let lnameErr = document.getElementById('lnameErr');
let emailErr = document.getElementById('emailErr');
let passErr = document.getElementById('passErr');
let confirmPassErr = document.getElementById('cPassErr');
let submitBtn = document.getElementById('submitBtn');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function signValidation(){
    //First Name
    if(firstName.value == ""){
        firstName.style.border = "2px solid red";
        fnameErr.innerHTML = "please enter your first name";
        firstName.focus();
        return false;
    }
    //Last Name
    if(lastName.value == ""){
        lastName.style.border = "2px solid red";
        lnameErr.innerHTML = "please enter your last name";
        lastName.focus();
        return false;
    }
    //email
    if(email.value == ""){
        email.style.border = "2px solid red";
        emailErr.innerHTML = "please enter your email";
        email.focus();
        return false;
    }
    //email validation with regular expression
    if(email.value.match(pattern)){
        
    }
    else{
        email.style.border = "2px solid red";
        emailErr.innerHTML = "please enter valid email";
        email.focus();
        return false;
    }

    //password
    if(pass.value == ""){
        pass.style.border = "2px solid red";
        passErr.innerHTML = "please enter your password";
        pass.focus();
        return false;
    }
    
    if(pass.value.length < 6){
        pass.style.border = "2px solid red";
        passErr.innerHTML = "(please enter at least 6 digits password)";
        pass.focus();
        return false;
    }
    //confirm password
    if(confirmPass.value != pass.value){
        confirmPass.style.border = "2px solid red";
        confirmPassErr.innerHTML = "password not matched!!";
        confirmPass.focus();
        return false;
    }
}

function errValid(){
    //First Name
    if(firstName.value != ""){
        firstName.style.borderColor = "#5f27cd";
        fnameErr.innerHTML = "";
    }
    //Last Name
    if(lastName.value != ""){
        lastName.style.borderColor = "#5f27cd";
        lnameErr.innerHTML = "";
    }
    //email
    if(email.value != ""){
        email.style.borderColor = "#5f27cd";
        emailErr.innerHTML = "";
    }
    //password
    if(pass.value != ""){
        pass.style.borderColor = "#5f27cd";
        passErr.innerHTML = "";
    }
    //confirm password
    if(confirmPass.value != ""){
        confirmPass.style.borderColor = "#5f27cd";
        confirmPassErr.innerHTML = "";
    }
}

firstName.onblur = errValid;
lastName.onblur = errValid;
email.onblur = errValid;
pass.onblur = errValid;
confirmPass.onblur = errValid;
//signup form validation ends

/////////

//login form validation starts
// variable declaration
let logEmail = document.getElementById('logEmail');
let logPassword = document.getElementById('logPassword');
let logEmailErr = document.getElementById('logEmailErr');
let logPasswordErr = document.getElementById('logPasswordErr');
let loginBtn = document.getElementById('loginBtn');


function logValidation(){
    //email
    if(logEmail.value == ""){
        logEmail.style.border = "2px solid red";
        logEmailErr.innerHTML = "please enter your email";
        logEmail.focus();
        return false;
    }
    //email validation with regular expression
    if(logEmail.value.match(pattern)){
        
    }
    else{
        logEmail.style.border = "2px solid red";
        logEmailErr.innerHTML = "please enter valid email";
        logEmail.focus();
        return false;
    }

    //password
    if(logPassword.value == ""){
        logPassword.style.border = "2px solid red";
        logPasswordErr.innerHTML = "please enter your password";
        logPassword.focus();
        return false;
    }
    
    if(logPassword.value.length < 6){
        logPassword.style.border = "2px solid red";
        logPasswordErr.innerHTML = "(please enter at least 6 digits password)";
        logPassword.focus();
        return false;
    }
}

function loginErrValid(){
    //email
    if(logEmail.value != ""){
        logEmail.style.borderColor = "#5f27cd";
        logEmailErr.innerHTML = "";
    }
    //password
    if(logPassword.value != ""){
        logPassword.style.borderColor = "#5f27cd";
        logPasswordErr.innerHTML = "";
    }
}

logEmail.onblur = errValid;
logPassword.onblur = errValid;
//login form validation ends

