let moreText = document.querySelector(".switch__content-more");
let btn = document.querySelector(".btn-more");

btn.addEventListener("click", function() {
    btn.style.display = "none";
    moreText.style.display = "flex"
}); 

let btnBox = document.querySelector(".btn-box");
let menubox = document.querySelector(".menu__box");

btnBox.addEventListener("click", function() {
    menubox.classList.add(".showit")
});

