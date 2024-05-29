$('#preloader-video').on('ended', function() {
    $('#preloader').fadeOut('slow', function() {
        $('#content').fadeIn('slow');
    });
});
$(document).ready(function() {
    $('#menu').on('click', function() {
        $('#popup_menu').addClass('open');
    });
    $('#close_popup').on('click', function() {
        $('#popup_menu').removeClass('open');
    });

    $('.check_size').on('click', function() {
        var thisCheck = $(this);
        $('.check_size').removeClass('active');
        thisCheck.addClass('active');
    })
})

