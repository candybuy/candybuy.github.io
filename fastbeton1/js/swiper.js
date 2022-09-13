const slider1 = document.querySelector(".swiper-pairs");
const slider2 = document.querySelector(".swiper-proof");


let MySwiper1 = new Swiper(slider1, {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 2000,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        800: {
            slidesPerView: 5,
            spaceBetween: 26,
            slidesPerGroup: 5,
        }
    },
    speed: 400,
    loop: true,

    pagination: {
        el: '.pag1',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

let MySwiper2 = new Swiper(slider2, {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 2000,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    speed: 400,
    loop: true,
    slidesPerGroup: 4,

    pagination: {
        el: '.pag2',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});



Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,

    Image: {
        zoom: false,
        click: false,
    },
});