const inputs = document.getElementsByTagName('input');
// const container = document.querySelector(".container");

function validateInputs() {
    for (let i=0; i< inputs.length; i++) {
        inputs[i].addEventListener('blur', function () {
            const error = document.getElementsByClassName('block__text');
            const errorIcon = document.getElementsByClassName('block__img');
            if (!this.value) {
                this.classList.add('invalid');
                error[i].classList.add('visible');
                errorIcon[i].classList.add('visible');
            } else {
                this.classList.remove('invalid');
                error[i].classList.remove('visible');
                errorIcon[i].classList.remove('visible');
            }
        })
    }
}

validateInputs();

// container.addEventListener("click", function(evt) {
//     console.log(evt);
// })
