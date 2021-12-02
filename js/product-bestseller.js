$('.product-bestseller').slick({
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});


// $('.outstand-product').slick({
//     infinite: true,
//     // speed: 300,
//     // slidesToShow: 2,
//     // slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 99999,
//             settings: "unslick"
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ],
//     prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
// });

// if (window.matchMedia("(max-width: 730px)").matches) {
//     /* the viewport is less than 768 pixels wide */
//     $('.outstand-product').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1
//     });
// } else {
//     $('.outstand-product').slick('unslick');
// }

$(window).resize(function(e){
    if(window.innerWidth < 740) {
        if(!$('.outstand-product').hasClass('slick-initialized')){
            $('.outstand-product').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
            });
        }
    }
    else{
        if($('.outstand-product').hasClass('slick-initialized')){
            $('.outstand-product').slick('unslick');
        }
    }
});

// $(window).resize(function(e){
//     if(window.innerWidth < 740) {
//         if(!$('.slider-element').hasClass('slick-initialized')){
//             $('.slider-element').slick({
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//                 nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
//             });
//         }
//     }
//     else{
//         if($('.slider-element').hasClass('slick-initialized')){
//             $('.slider-element').slick('unslick');
//         }
//     }
// });
//
// slider-element