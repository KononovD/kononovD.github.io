$(document).ready(function() {
    $('.pizza-slider').slick({
        nextArrow: '<i class="fa fa-chevron-right wow fadeInRightBig " data-wow-duration="1s" data-wow-delay="2s"></i>',
        prevArrow: '<i class="fa fa-chevron-left wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="2s"></i>',
    });

    $('button').on('click', function() {
        $('body').toggleClass('open');
    });
});