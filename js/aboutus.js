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