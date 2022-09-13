const slider1 = document.querySelector(".swiper-page");


let galleryThumbs = new Swiper(slider1, {
    observer: true,
    observeParents: true,
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
})