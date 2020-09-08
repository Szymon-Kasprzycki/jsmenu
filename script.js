const arrow = document.querySelector(".arrow");
const elementsOn = document.querySelectorAll(".active");

arrow.addEventListener("click", function () {
    for (let i = 0; i < elementsOn.length; i++) {
        elementsOn[i].classList.toggle("on");
    }
})