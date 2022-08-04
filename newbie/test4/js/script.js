// const menu = document.querySelectorAll(".menu");
// const titles = document.querySelectorAll(".title");
// const contents = document.querySelectorAll(".content");
// let currentItem = null;

// function displayItem(i) {
//     titles[i].classList.add("title-active");
//     contents[i].classList.add("open");
// }

// function hideItem(i) {
//     titles[i].classList.remove("title-active");
//     contents[i].classList.remove("open");
// }

// for (let i = 0; i < menu.length; i++) {
//     menu[i].addEventListener(('click'), function () {
//         if (currentItem === null) {
//             displayItem(i);
//             currentItem = i;
//         } else if (currentItem === i) {
//             hideItem(currentItem);
//             currentItem = null;
//         } else {
//             hideItem(currentItem);
//             displayItem(i);
//             currentItem = i;
//         }
//     });
// }


window.addEventListener('load', function(){

	let faq = document.querySelector('.accordion');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('title')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		// ask.nextElementSibling
		let answer = ask.parentNode.querySelector('.content');
		
		if(answer.classList.contains('open')){
			answer.classList.remove('fadeIn');
			answer.classList.add('fadeOut');

			function removeOpenClass(){
				console.log('here');
				answer.classList.remove('open');
				answer.removeEventListener('animationend', removeOpenClass);
			}

			answer.addEventListener('animationend', removeOpenClass);
		}
		else{
			answer.classList.remove('fadeOut');
			answer.classList.add('open');
			answer.classList.add('fadeIn');
		}
	}

});