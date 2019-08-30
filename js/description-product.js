const $heart = window.document.querySelector(".heart");

$heart.addEventListener("click", handelClick);

function handelClick() {
  $heart.classList.toggle("-active");
}
