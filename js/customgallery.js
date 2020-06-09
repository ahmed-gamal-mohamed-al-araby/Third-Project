$(function () {
  
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


  $(".boxs").snakeify({
    speed: 200
  });


  $('.gallery .box').t();

  $('#mixit-container').mixItUp();

  $('.fancybox').fancybox();

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
  
   $(".gallery ul li").on("click", function() {

      $(this).addClass("active").siblings().removeClass("active");

      if ($(this).data("class") === "all") {

        $("img").css("display", "block");

      } else {

        $(" .gallery img").css("display", "none");

        $($(this).data('class')).css("display", "block");
      }

    });
  
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

      $("html,body").animate({

        scrollTop: 0
      }, 1000);

    });

});