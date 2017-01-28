function handleInputChange(event) {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const inputs = document.querySelectorAll('input');
inputs.forEach(i => i.addEventListener("change", handleInputChange));
inputs.forEach(i => i.addEventListener("mousemove", handleInputChange));