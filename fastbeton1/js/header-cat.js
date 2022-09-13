window.onload = function () {
    let vector = document.querySelector(".vector");
    let noneShow = document.querySelector(".noneShow");


    vector.addEventListener("click", function() {
        if (noneShow.classList.contains("show")) {
            noneShow.classList.remove("show");
            vector.style.transform = "rotate(0deg)";
        }
        else {
            noneShow.classList.add("show");
            vector.style.transform = "rotate(180deg)";
        }
    });

    // SCROLL DOWN
    let headerScroll = document.querySelector(".header__scroll")


    headerScroll.addEventListener("click", function() {
        window.scrollTo(0, 50);
        // этот код меняет поведение прокрутки на "smooth"
        window.scrollTo({
            top: 600,
            behavior: "smooth"
        });
    });



    // BURGER MENU
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }
  
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }

}