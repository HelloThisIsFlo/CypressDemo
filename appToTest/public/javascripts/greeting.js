const magicDiv = document.querySelector("#magic");
const button = document.querySelector("#magic-btn");

function showMagicDiv() {
  magicDiv.classList.remove('hide')
}

button.addEventListener("click", () => {
  showMagicDiv();
});

console.log(button);
console.log(magicDiv);
