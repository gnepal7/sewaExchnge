$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if(scroll >= 75) {
    $(".nav").addClass("fixed");
  } else {
    $(".nav").removeClass("fixed");
  }


    if (window.innerWidth < 768) {
    $(".left_nav").toggleClass("fixed", $(window).scrollTop() >= 75);
  } else {
    $(".left_nav").removeClass("fixed");
  }

  if (window.innerWidth > 768) {
    $(".top_nav").toggleClass("fixed", $(window).scrollTop() >= 75);
  } else {
    $(".top_nav").removeClass("fixed");
  }

  //scroll progress-bar
  var scrollTop = $(window).scrollTop();
  var scrollHeight = $(document).height();
  var windowHeight = $(window).height();
  var scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;
  $('.progress-bar').width(scrollPercent + '%');

  // image reveal on scroll
  $('.img-outer').each(function() {
    var imagePosition = $(this).offset().top;
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scrollPosition > imagePosition - windowHeight + 100) {
      $(this).addClass('in-view');
    }
  });

});


$( document ).ready(function() {
  $( '.nav_toggler' ).click(function() {
    $( 'body' ).toggleClass( 'over' );
    $( '.nav_ul' ).toggleClass( 'on_mobile' );
    $(this).toggleClass( 'close' );
  });

  if ($(window).width()<767) {
    $(".drop").click(function(){
      $(this).toggleClass('with-drop')
      $(this).children(".submnu").toggleClass("show");
    });
  }
  else {
    $(".drop").hover(function(){
      $(this).toggleClass('with-drop')
      $(this).children(".submnu").toggleClass("show");
    });
  }


  $(".notify-btn").click(function() {
    $( 'body' ).toggleClass( 'over' );
    $('.notification').toggleClass('show')
  });

  $(".profile-btn").click(function() {
    $( 'body' ).toggleClass( 'over' );
    $('.profile_box').toggleClass('show')
  });



  // tab style
  $('.tab-content').slice(1).hide();
  $('.tab-menu li').eq(0).addClass('active');
  $('.tab-menu li a').click(function(e) {
    e.preventDefault();
    var content = $(this).attr('href');
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    $(content).show();
    $(content).siblings('.tab-content').hide();
  });



  
});
