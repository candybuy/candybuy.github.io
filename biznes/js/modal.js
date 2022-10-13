// Get the modal
let modal = document.querySelector(".modal");

// Get the button that opens the modal
let btn = document.querySelector("#myBtn");
let btn1 = document.querySelector("#myBtn1");
let btn2 = document.querySelector("#myBtn2");
let btn3 = document.querySelector("#myBtn3");
let btn4 = document.querySelector("#myBtn4");

// Get the <span> element that closes the modal
let span = document.querySelector(".close");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
btn1.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal.style.display = "block";
}
btn3.onclick = function () {
    modal.style.display = "block";
}
btn4.onclick = function () {
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}