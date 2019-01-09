$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left nav-owl nav-left'></i>", "<i class='fa fa-chevron-right nav-owl nav-right'></i>"]
    });
    new WOW({}).init({offset: 70});

    $("a.footer__up-btn").click(function () {
        return $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, {
            duration: 500,
            easing: "swing"
        });
    });

    $.fn.parallax = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.2,
            {
                x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
                y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
            });
    };

    $('body').mousemove(function (e) {
        $('._image-2').parallax(-10, e);
        $('._image-3').parallax(20, e);
        $('._image-4').parallax(30, e);
        $('._image-5').parallax(40, e);
        $('._image-6').parallax(-50, e);
        $('._image-7').parallax(60, e);
        $('._image-9').parallax(70, e);
        $('._image-11').parallax(80, e);
        $('._image-10').parallax(90, e);
        $('._image-14').parallax(-30, e);
        $('._image-15').parallax(-20, e);
        $('._image-16').parallax(70, e);
        $('._image-fox-circle').parallax(50, e);
        $('._image-fox-bg').parallax(30, e);
        $('._image-18').parallax(40, e);
        $('._image-19').parallax(60, e);
        $('._image-20').parallax(20, e);
        $('._image-21').parallax(10, e);
        $('._image-foxicash').parallax(80, e);
    });

    $('.menu__open').on('click', function () {
        $('body').toggleClass('open');
    });

    document.querySelectorAll('.play-button').forEach(button => {
        button.style.backgroundImage = drawBackground();
    });



    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', e => {
            e.target.classList.add('shake');
            e.target.classList.add('revealed');
            soundClick(e);
        });
    });


    function drawBackground() {
        const backgroundValue = Math.floor(Math.random() * 101) % 2 != 0 ? 'game-coin' : 'game-bomb';
        return `url('./img/${backgroundValue}.png')`;
    }


    function soundClick(e) {
        var audio = new Audio();
        if(e.target.style.backgroundImage == "url(\"./img/game-bomb.png\")"){
            audio.src = './sound/bomb.mp3';
            audio.autoplay = true;
            audio.volume = 0.3;
        } else{
            audio.src = './sound/coin.mp3';
            audio.autoplay = true;
            audio.volume = 0.5;
        }

    }

    // function playSound () {
    //     document.getElementById('play').play();
    // }



    // $('.mobile__choice-lang').click(function () {
    //     $(this).siblings('.mobile__lang-menu').toggle();
    //     $(this).toggleClass('active-language');
    // });
    // $(window).click(function () {
    //     $('.mobile__lang-menu').fadeOut('middle');
    //     $('.selected-lang').removeClass('active-language');
    // });
});