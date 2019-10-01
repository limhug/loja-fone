const $heart = document.querySelector(".description-store .heart");

$heart.addEventListener("click", handleClickHeart);

const $stars = document.querySelectorAll(".description-store .star");
const $lastStar = $stars.length - 1;

$stars.forEach(function(item, index) {
  if (index === 0) {
    item.addEventListener("click", firstStar);
  }

  if (index > 0 && index < $lastStar) {
    item.addEventListener("click", function() {
      midleStar(index);
    });
  }

  if (index === $lastStar) {
    item.addEventListener("click", lastStar);
  }
});

function handleClickHeart() {
  $heart.classList.toggle("-active");
}

function firstStar(index) {
  $stars.forEach(function(item) {
    item.classList.remove("-active");
  });

  $stars[0].classList.add("-active");
}

function midleStar(index) {
  $stars.forEach(function(item, key) {
    item.classList.remove("-active");

    if (key <= index) {
      item.classList.add("-active");
    }
  });
}

function lastStar() {
  $stars.forEach(function(item) {
    item.classList.add("-active");
  });
}
