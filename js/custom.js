$(function () {

  'use strict';

  /* option-box */

  $(".gear-check").click(function () {

    $(".color-option").fadeToggle();

  });

  var colorli = $(".color-option ul li");

  colorli.eq(0).css("backgroundColor", "#01BAFD").end()
    .eq(1).css("backgroundColor", "#E41B17").end()
    .eq(2).css("backgroundColor", "#E426D5").end()
    .eq(3).css("backgroundColor", "#0b08d1").end()
    .eq(4).css("backgroundColor", "#6610f2");

  colorli.click(function () {

    $("link[href *='default']").attr("href", $(this).attr("data-value"));

  });

  /* **********************************  */

  /* niceScroll */

  $('html').niceScroll();

  /* **********************************  */

  /* fancybox */

  $('.fancybox').fancybox();

  /* **********************************  */

  /* Search */

  $('#mu-search-icon').on('click', function (event) {
    event.preventDefault();
    $('#mu-search').addClass('mu-search-open');
    $('#mu-search form input[type="search"]').focus();
  });

  $('.mu-search-close').on('click', function (event) {
    $("#mu-search").removeClass('mu-search-open');
  });

  /* ********************************* */

  /* Calculate Height Slider */

  var winh = $(window).height(),
    toph = $(".top-bar").innerHeight(),
    navh = $(".navbar").innerHeight();

  $(".ex-slider .carousel-item").height(winh - (toph + navh));

  /* **********************************  */

  /* video */

  $('#mu-abtus-video').on('click', function (event) {
    event.preventDefault();
    $('body').append("<div id='about-video-popup'><span id='mu-video-close' class='fa fa-close'></span><iframe id='mutube-video' name='mutube-video' frameborder='0' allowfullscreen></iframe></div>");
    $("#mutube-video").attr("src", $(this).attr("href"));
  });

  // WHEN CLICK CLOSE BUTTON
  $(document).on('click', '#mu-video-close', function (event) {
    $(this).parent("div").fadeOut(1000);
  });
  // WHEN CLICK OVERLAY BACKGROUND
  $(document).on('click', '#about-video-popup', function (event) {
    $(this).remove();
  });

  /* ********************************* */

  /*  owl-carousel testimonail */

  $("#owl-example2").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    navigation: true,
    nav: true
  });

  /* ********************************** */

  /* counter (count) */

  $('.counter').counterUp({
    delay: 10,
    time: 7000
  });

  /* ********************************** */

  /*  owl-carousel latest-course */

  $('#owl-example1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navigation: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      1000: {
        items: 3
      }

    }
  })

  /* ********************************** */

  $(window).scroll(function () {

    var scrolltop = $(".scroll-top");

    if ($(window).scrollTop() > 700)

    {
      scrolltop.fadeIn(1000);

    } else

    {
      scrolltop.fadeOut(1000);
    }


  });

  $(".scroll-top").click(function () {

    $("html , body").animate({

      scrollTop: 0

    }, 1000);

  });


});