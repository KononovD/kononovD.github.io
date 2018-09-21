$(document).ready(function() {
        $('.selected-lang').click(function() {
                $(this).siblings('.lang-list').toggle();
                $(this).toggleClass('active');
        });
        $(window).click(function() {
                $('.lang-list').fadeOut('middle');
                $('.selected-lang').removeClass('active');
        });
        $('.selected-lang').click(function(event) {
                event.stopPropagation();
        });
        $('.lang-list li').click(function() {
                var icon = $(this).find('a').html();
                $('.lang-list li').removeClass('active');
                $(this).addClass('active');
                $('.selected-lang span').remove();
                $(icon).clone().appendTo('.selected-lang');
                $('.lang-list').fadeOut('middle');
                $('.selected-lang').removeClass('active');
        });
});