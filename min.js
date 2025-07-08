$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      
    });
});



$(document).ready(function(){
    $('.blog-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      dotsClass: 'blog-dots',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1

          }
        }
      ]
    });
});



$(document).ready(function(){
    $('.course-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: "<span class='arrow-prev'><</span>",
      nextArrow: "<span class='arrow-next'>></span>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1

          }
        }
      ]
    });
});