export function initSlider($slider, itemPerLine) {
    $slider.on('initialize.owl.carousel', function () {
        $(this).closest('.slider-fouc').removeAttr('class');
    }).owlCarousel({
        autoplay: false,
        loop: false,
        dots: false,
        rewind: true,
        smartSpeed: 1500,
        nav: true,
        navElement: 'div',
        navClass: ['t-prev', 't-next'],
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: itemPerLine - 2
            },
            991: {
                items: itemPerLine - 1
            },
            1200: {
                items: itemPerLine
            }
        }
    });
}
