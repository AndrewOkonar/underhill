$(document).ready(function(){

  // Menu open function
  $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    $('.main-menu').toggleClass('open');
  });

  setTimeout(function () {
    $('.left-line-js').addClass('active');
  }, 400);

  setTimeout(function () {
    $('.right-line-js').addClass('active');
  }, 800);

});

// Full page scroll settings
var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#211F1B', '#211F1B', '#211F1B', '#211F1B', '#0F0E0D'],
    anchors: ['home', 'develop', 'achievements', 'ideas', 'contact'],
    menu: '.menu',
    lazyLoad: true,
    lockAnchors: true,
    keyboardScrolling: true,
    scrollBar: true,
    afterLoad: function(anchorLink, index) {
      //fix for animation when user whant to reload page on some other slides then home
      if (index.index > 0) {
        $('.fixed-elements .wow').removeClass('wow fadeIn').addClass('menu-fix')
      }

      if(index.index == 4) {
        $('.notification').addClass('hide');
      }
      else {
        $('.notification').removeClass('hide');
      }
    },
    responsiveWidth: 992
});

//adding the action to the button
$(document).on('click', '#home-link', function(){
  fullpage_api.moveTo('home', 0);
});
//adding the action to the button
$(document).on('click', '#develop-link', function(){
  fullpage_api.moveTo('develop', 1);
});
//adding the action to the button
$(document).on('click', '#achievements-link', function(){
  fullpage_api.moveTo('achievements', 2);
});
//adding the action to the button
$(document).on('click', '#ideas-link', function(){
  fullpage_api.moveTo('ideas', 3);
});

//adding the action to the button
$(document).on('click', '#section4', function(){
  fullpage_api.moveTo('contact', 4);
});


//first slider init
$('#slider').owlCarousel({
    loop:true,
    margin:30,
    center: true,
    nav:true,
    mouseDrag: false,
    touchDrag: true,
    navText: ["<img src='dist/img/arrow-left.svg'>", "<img src='dist/img/arrow-right.svg'>"],
    onInitialized: counter,
    onChanged: counter,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3,
            touchDrag: true
        }
    }
});

//second slider init
$('#slider2').owlCarousel({
    loop:true,
    margin:30,
    center: true,
    nav:true,
    mouseDrag: false,
    touchDrag: false,
    navText: ["<img src='dist/img/arrow-left.svg'>", "<img src='dist/img/arrow-right.svg'>"],
    onInitialized: counter2,
    onChanged: counter2,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

//second slider init
$('#slider3').owlCarousel({
    loop:true,
    margin:30,
    center: true,
    nav:true,
    mouseDrag: false,
    touchDrag: false,
    navText: ["<img src='dist/img/arrow-left.svg'>", "<img src='dist/img/arrow-right.svg'>"],
    onInitialized: counter3,
    onChanged: counter3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

//settings for slider counter
function counter(event) {
  if (!event.namespace) {
    return;
  }
  var slides = event.relatedTarget;
  $('.slider-counter').html(slides.relative(slides.current()) + 1 + '<span> / ' + slides.items().length) + '</span>';
}

function counter2(event) {
  if (!event.namespace) {
    return;
  }
  var slides2 = event.relatedTarget;
  $('.slider-counter2').html(slides2.relative(slides2.current()) + 1 + '<span> / ' + slides2.items().length) + '</span>';
}

function counter3(event) {
  if (!event.namespace) {
    return;
  }
  var slides3 = event.relatedTarget;
  $('.slider-counter3').html(slides3.relative(slides3.current()) + 1 + '<span> / ' + slides3.items().length) + '</span>';
}

//gallery settings
var lightbox = $('.gallery a').simpleLightbox({
  showCounter: false
});
var lightbox2 = $('.gallery2 a').simpleLightbox({
  showCounter: false
});
var lightbox2 = $('.gallery3 a').simpleLightbox({
  showCounter: false
});

//wow js init function for animations
new WOW().init();

//# sourceMappingURL=main.js.map
