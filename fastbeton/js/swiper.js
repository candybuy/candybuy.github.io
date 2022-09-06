const slider1 = document.querySelector(".swiper-pairs");
const slider2 = document.querySelector(".swiper-proof");


let MySwiper1 = new Swiper(slider1, {
    speed: 400,
    slidesPerView: 5,
    spaceBetween: 26,
    loop: true,
    slidesPerGroup: 5,

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
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 30,
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