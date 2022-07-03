const menu = document.querySelectorAll(".menu");
const titles = document.querySelectorAll(".title");
const contents = document.querySelectorAll(".content");
let currentItem = null;

function displayItem(i) {
    titles[i].classList.add("title-active");
    contents[i].classList.add("content-show");
}

function hideItem(i) {
    titles[i].classList.remove("title-active");
    contents[i].classList.remove("content-show");
}

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener(('click'), function () {
        if (currentItem === null) {
            displayItem(i);
            currentItem = i;
        } else if (currentItem === i) {
            hideItem(currentItem);
            currentItem = null;
        } else {
            hideItem(currentItem);
            displayItem(i);
            currentItem = i;
        }
    });
}
