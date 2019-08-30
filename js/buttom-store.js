const $buttonAdicionar = document.querySelector(".-second");

$buttonAdicionar.addEventListener("click", handleAdd);

let valorInicial = 0;

function handleAdd() {
  const $linkCarrinho = document.querySelector(".navigation .-last .value");

  $linkCarrinho.textContent = ++valorInicial;
}
