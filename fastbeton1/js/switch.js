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


function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
