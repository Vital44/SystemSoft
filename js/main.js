$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        dots: false
    });

    $('.reviews-slider').slick({
        slidesToShow: 2,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next slick-next-two"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev slick-prev-two"><i class="fa fa-angle-left"></i></button>',
        dots: false,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
    });

    $('.language-ru').click(function(){
        $('.language-en').toggle('sdsd');
    })

    $('.menu-open').click(function() {
        $('.menu-collapse').removeClass('d-none');
        $('.menu-collapse').addClass('opened');
        $('.communication').addClass('menu-btn');
    });
    $('.myClose').click(function(){
        $('.menu-collapse').addClass('d-none');
        $('.communication').removeClass('menu-btn')
    })

    //scroling//

$('.go_to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1300);
        }
	    return false;
    });
});
//map//
    function initMap() {
      var myLatLng = {lat: 53.8856736, lng: 27.6436482};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
    }