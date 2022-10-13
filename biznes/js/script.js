// const slider1 = document.querySelector(".swiper-page");
// const slider2 = document.querySelector(".swiper-hr");


// let galleryThumbs = new Swiper(slider1, {
//     observer: true,
//     observeParents: true,
//     loop: true,
//     spaceBetween: 15,
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
// })

// let firstRow = new Swiper(slider2, {
//     observer: true,
//     observeParents: true,
//     loop: true,
//     spaceBetween: 15,
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     speed: 10000,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false
//     },
// })

// Mask on PHONE
let element = document.querySelector('.number');
let maskOptions = {
    mask: '+{7}(000)000-00-00'
};
let mask = IMask(element, maskOptions);
