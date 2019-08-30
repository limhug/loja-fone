const $buttonAdicionar = document.querySelector(".-second");
const $linkCarrinho = document.querySelector(".navigation .-last");

$buttonAdicionar.addEventListener("click", handleAdd);

function handleAdd() {
  $linkCarrinho.innerHTML = "Adicionou!";
}
