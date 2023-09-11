let iconElements = document.getElementsByClassName("icon");

let onIconToggleEvent = function () {
  let parent = this.parentElement;
  let isClosed = parent.classList.contains("close");

  this.innerHTML = isClosed ? "&ndash;" : "+";

  parent.classList.add(isClosed ? "open" : "close");
  parent.classList.remove(isClosed ? "close" : "open");
};

for (let i = 0; i < iconElements.length; i++) {
  iconElements[i].addEventListener("click", onIconToggleEvent, false);
}
