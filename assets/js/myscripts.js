$('.multiple-items').slick({
    dots : true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint : 992,
            settings: {
                slidesToShow : 2,
                slidesToScroll : 2,
                dots: false,
                infinite: true,
            }
        },
        {
            breakpoint : 576,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1,
                dots:false,
                infinite : true,
            }
        }
    ]
  });