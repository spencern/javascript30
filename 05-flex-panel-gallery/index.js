function handleClick(event) {
  this.classList.toggle("open");
}

function handleTransitionEnd(event) {
  if (event.propertyName === "flex" || event.propertyName === "flex-grow") {
    if (this.classList.contains("open")) {
      this.classList.add("open-active");
    } else {
      this.classList.remove("open-active");
    }
  }
}

const panels = document.querySelectorAll(".panel");

panels.forEach(p => p.addEventListener("click", handleClick));
panels.forEach(p => p.addEventListener("transitionend", handleTransitionEnd));