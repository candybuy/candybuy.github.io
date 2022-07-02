// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
const selected = document.querySelector('.selected');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    document.querySelector(".active").classList.remove('active'); //у тебя всегда только 1 элемент с классом эктив
    this.classList.add("active"); // добавляем класс эктив
  });
}

const btn = document.querySelector(".btn-submit");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
btn.onclick = ()=>{
  const active = document.querySelector(".active").textContent; // берем текст из эктив класса
	selected.textContent = `You selected ${active} out of 5`; // меняем текст
	widget.style.display = "none";
	post.style.display = "block";
	return false;
}



