let input = document.querySelector("input");
let inputForm = document.querySelector("form");
let btnFirst = document.querySelector(".first-delete");
let btnEnd = document.querySelector(".end-delete");
let btnAll = document.querySelector(".delete-all");
let list = document.querySelector("ol");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  new Audio("./click-sound/muse-click-sound.mp3").play();
});
btnFirst.addEventListener("click", () => {
  Array.from(list.children).at().remove();
  new Audio("./click-sound/pen-click-sound.mp3").play();
});
btnEnd.addEventListener("click", () => {
  Array.from(list.children).at(-1).remove();
  new Audio("./click-sound/clic.mp3").play();
});
btnAll.addEventListener("click", () => {
  let arr = Array.from(list.children);
  arr.forEach((item) => {
    item.remove();
  });
  new Audio("./click-sound/null-click.mp3").play();
});
