$(document).ready(function() {

    // Находим блок карусели
    var carousel = $("#carousel");

    // Запускаем плагин карусели
    carousel.owlCarousel({
        // Точки под каруселью
        pagination: true,
        singleItem: true,
    });

    $('#js-prev').click(function() {

        // Запускаем перемотку влево
        carousel.trigger('owl.prev');

        return false;
    });
    $('#js-next').click(function() {

        // Запускаем перемотку вправо
        carousel.trigger('owl.next');

        return false;
    });

    $('.popup .close_window, .overlay').click(function() {
        $('.popup, .overlay').css({ 'opacity': 0, 'visibility': 'hidden' });
    });
    $('a.open_window').click(function(e) {
        $('.popup, .overlay').css({ 'opacity': 1, 'visibility': 'visible' });
        e.preventDefault();
    });

    $("a.next-section-link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    $("#form").submit(function(e) {
        var text = $("#text").val();
        var email = $("#email").val();
        var tel = $("#tel").val();
        alert("Имя: " + text +
            "\ne-mail: " + email +
            "\nТелефон: " + tel)
        e.preventDefault();
        return false;
    });

    $("#form1").submit(function(e) {
        var text = $("#text1").val();
        var email = $("#email1").val();
        var tel = $("#tel1").val();
        alert("Имя: " + text +
            "\ne-mail: " + email +
            "\nТелефон: " + tel)
        e.preventDefault();
        return false;
    });

});