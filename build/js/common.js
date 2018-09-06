$(document).ready(function() {
  //menu
  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $('.main-menu').toggleClass('slide');
    $('.sidebar-cabinet').toggleClass('slide');
  });

  //lang
  //select-lang
  $('.selected-lang').click(function(){
    $(this).siblings('.lang-list').toggle();
    $(this).toggleClass('active');
  });
  $(window).click(function() {
    $('.lang-list').fadeOut('fast');
    $('.selected-lang').removeClass('active');
    $('.user-nav').removeClass('active');
    $('.user-name').removeClass('active');
  });
  $('.selected-lang').click(function(event){
    event.stopPropagation();
  });
  $('.lang-list li').click(function(){
    var icon = $(this).find('a').html();
    $('.lang-list li').removeClass('active');
    $(this).addClass('active');
    $('.selected-lang span').remove();
    $(icon).clone().appendTo('.selected-lang');
    $('.lang-list').fadeOut('fast');
    $('.selected-lang').removeClass('active');
  });

  //accordion
  (function($) {
    $('.accordion > li:eq(0) .accordion-title').addClass('active').next().slideDown().parent().addClass('active');
    $('.accordion .accordion-title').click(function(j) {
      var dropDown = $(this).closest('li').find('.question-block');
      $(this).closest('.accordion').find('.question-block').not(dropDown).slideUp();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').parent().removeClass('active');
      } else {
        $(this).closest('.accordion').find('.accordion-title.active').removeClass('active').parent().removeClass('active');
        $(this).addClass('active').parent().addClass('active');
      }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  })(jQuery);

  //placeholder
  $('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  $('input,textarea').blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });

  //tabs
  $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  //table-responsive
  $(function () {
    $('table.responsive').ngResponsiveTables();
  });


  //clipboard
  var clip1 = new Clipboard('#banner1');
  var clip2 = new Clipboard('#banner2');
  var clip3 = new Clipboard('#banner3');

  function bannerLink(id) {
    id.on('success', function (e) {
      swal({
        title: "Link copied",
        text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
        type: "success",
        showCancelButton: false,
        confirmButtonClass: "btn-success",
        confirmButtonText: "OK!",
        closeOnConfirm: false,
        closeOnCancel: false
      });
    });
  }

  bannerLink(clip1);
  bannerLink(clip2);
  bannerLink(clip3);

  var affil1 = new Clipboard('#affiliater1');

  function affiliatelink(id) {
    id.on('success', function (e) {
      swal({
        title: "Your referral link copied!",
        text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
        type: "success",
        showCancelButton: false,
        confirmButtonClass: "btn-success",
        confirmButtonText: "OK!",
        closeOnConfirm: false,
        closeOnCancel: false
      });
    });
  }

  affiliatelink(affil1);



});


//local-time
function cityTime() {
  moment.locale('ru');
  var Russian = moment();

  var time_moscow = moment.tz("Europe/Moscow").format('HH:mm');
  var time_moscowRussian = Russian.tz("Europe/Moscow").format('DD/MM');

  $('#time-cabinet').text(time_moscow);
  $('#date-cabinet').text(time_moscowRussian);
}

$(document).ready(function () {
  setInterval('cityTime()', 1000);
});

