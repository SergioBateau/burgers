;
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsSlider = document.querySelector("#items__slider");

right.addEventListener("click", function (e) {
  e.preventDefault();
  loop("right");
});

left.addEventListener("click", function (e) {
  e.preventDefault();
  loop("left");
});

function loop(direction) {
  if (direction === "right") {
    itemsSlider.appendChild(itemsSlider.firstElementChild);
  } else {
    itemsSlider.insertBefore(itemsSlider.lastElementChild, itemsSlider.firstElementChild);
  }
};