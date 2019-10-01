function search(){
  const $search = document.querySelector(".box-search");
  const $lupa = $search.querySelector(".-search");
  const $close = $search.querySelector(".-close");
  
  $lupa.addEventListener("click", () => {
    $search.classList.add('-active');
    $lupa.classList.remove('-active')
    $close.classList.add('-active')
  });
  
  $close.addEventListener("click", () => {
    $search.classList.remove('-active');
    $lupa.classList.add('-active')
    $close.classList.remove('-active')
  });
}

search();

const $menu = document.querySelector(".menu");
const $iconMenu = $menu.querySelector(".-menu");
const $iconClose = $menu.querySelector(".-close");

$iconMenu.addEventListener("click", () => {
  $menu.classList.add("-active");
  $iconMenu.classList.remove("-active");
  $iconClose.classList.add("-active");
});

$iconClose.addEventListener("click", () => {
  $menu.classList.remove("-active");
  $iconMenu.classList.add("-active");
  $iconClose.classList.remove("-active");
});