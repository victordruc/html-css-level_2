$(document).ready(function(){
    $('.user ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 730,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    });
  });