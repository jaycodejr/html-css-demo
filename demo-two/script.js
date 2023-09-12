let log = console.log;
let iconElements = document.getElementsByClassName("item");

let onIconToggleEvent = function () {
  let elem = this;
  let isClosed = elem.classList.contains("close");

  let iconElem = elem.querySelector(".icon");
  iconElem.innerHTML = isClosed ? "-" : "+";

  elem.classList.add(isClosed ? "open" : "close");
  elem.classList.remove(isClosed ? "close" : "open");
};

for (let i = 0; i < iconElements.length; i++) {
  iconElements[i].addEventListener("click", onIconToggleEvent, false);
}
