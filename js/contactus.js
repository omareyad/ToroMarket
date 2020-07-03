let navbar = $(".navbar");
let mobilecol = $(".fa-align-left");
let secondcolor = $(".nav-link");
let secondser = $(".fa-search ");
let logo = $(".logogreen ");
let logo2 = $(".hidelogo")



$(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".contact1-form-title").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
        
        mobilecol.addClass("btninfo");
        secondcolor.addClass("coloo");
        secondser.addClass("serch");
        logo.addClass("logogreen");
        logo.css("display", "block");
        logo2.css("display","none");

    } else {

        navbar.removeClass("sticky");
        mobilecol.removeClass("btninfo");
        secondcolor.removeClass("coloo");
        secondser.removeClass("serch");
        logo.removeClass("logogreen");
        logo.css("display", "none");
        logo2.css("display","block");


    }
});

//sidebar js
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebarCollapse').fadeOut();
        $('#sidebar').toggleClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');



    });
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebarCollapse').fadeIn();
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });
});

//sidebar js








//full-screen -about
