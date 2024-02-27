$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true
    });


    $(window).scroll(function() {
        let scrollTopPos = 500;
        let goBackElement = document.getElementById('goBackElement');
        if($(this).scrollTop() >= scrollTopPos) {
            goBackElement.classList.add('show');
        } else {
            goBackElement.classList.remove('show');
        }
    });
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// });
