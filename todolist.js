"use strict";
const addTask = document.querySelector(".btn");
const input = document.getElementById("text");
const container = document.querySelector(".item");
const ul = document.querySelector(".tasks-list");

addTask.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    if (container.style.height <= "300px") {
      let height = container.offsetHeight;
      let new_height = height + 100;
      container.style.height = new_height + "px";
    }
    const checked = document.createElement("button");
    const remove = document.createElement("button");
    checked.classList.add("check");
    remove.classList.add("remove");
    remove.innerHTML = "X";
    checked.innerHTML = "&#10003";
    ul.appendChild(checked);
    ul.appendChild(remove);
    checked.onclick = function () {
      li.classList.add("crossed");
    };
    remove.onclick = function () {
      ul.removeChild(li);
      let height = container.offsetHeight;
      let new_height = height - 100;
      container.style.height = new_height + "px";
      checked.classList.add("hidden");
      remove.classList.add("hidden");
    };
  }
  input.value = "";
});
