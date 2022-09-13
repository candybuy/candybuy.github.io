window.onload = function () {
    let vector = document.querySelector(".vector");
    let noneShow = document.querySelector(".noneShow");
    let title__phone = document.querySelector(".title__phone");
    let phone = document.querySelector(".phone");
    
    



    // VECTOR ROTATE
    vector.addEventListener("click", function () {
        if (noneShow.classList.contains("show")) {
            noneShow.classList.remove("show");
            title__phone.classList.remove("titlePhonePadding");
            phone.classList.remove("phoneColor");
            noneShow.classList.remove("phoneColor");
            vector.style.transform = "rotate(0deg)";
        } else {
            noneShow.classList.add("show");
            title__phone.classList.add("titlePhonePadding");
            phone.classList.add("phoneColor");
            noneShow.classList.add("phoneColor");
            vector.style.transform = "rotate(180deg)";
        }
    });






    // SCROLL DOWN
    let headerScroll = document.querySelector(".header__scroll")
    let scrollIMG = document.querySelector(".scroll__img")


    headerScroll.addEventListener("click", function () {
        let pos = document.querySelector("h2").offsetTop - 20;
        window.scrollTo(0, 50);
        // этот код меняет поведение прокрутки на "smooth"
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    });
    // SCROLL DOWN ENDS


    // Mask on PHONE
    let element = document.querySelector('.number');
    let maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    let mask = IMask(element, maskOptions);
}

// BURGER
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}


// HEADER fixed
window.onscroll = function () {
    myFunction()
};

let header = document.querySelector("#myHeader");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}