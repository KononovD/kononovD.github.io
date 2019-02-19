$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 3,
        dots: false,
        smartSpeed: 500,
        navText: ["<i class=\"fas fa-arrow-circle-left\"></i>", "<i class=\"fas fa-arrow-circle-right\"></i>"]
    });
});