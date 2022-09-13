const slider1 = document.querySelector(".swiper-page");


let galleryThumbs = new Swiper(slider1, {
    observer: true,
    observeParents: true,
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    slidesPerGroup: 1,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
})

window.onload = function() {
    const slider2 = document.querySelector(".swiper-hr");
    let firstRow = new Swiper(slider2, {
        observer: true,
        observeParents: true,
        loop: true,
        spaceBetween: 15,
        slidesPerView: 1,
        slidesPerGroup: 1,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        speed: 10000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
    })
}
