const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];
const tapaList = JSON.parse(localStorage.getItem("tapas") || "{}");

const loadTapas = function () {
  Object.keys(tapaList).forEach(tapa => {
    const element = document.createElement("li");
    const checked = tapaList[tapa] ? "checked" : "";
    element.innerHTML = `
      <input type="checkbox" ${checked}>
      <label>${tapa}</label>`;
    itemsList.appendChild(element);      
  });
}

const addItem = function (e) {
  e.preventDefault();
  const element = document.createElement("li");
  element.innerHTML = `
    <input type="checkbox">
    <label>${this.item.value}</label>`;
  itemsList.appendChild(element);

  tapaList[this.item.value] = false;
  localStorage.setItem("tapas", JSON.stringify(tapaList));
  this.reset();
}

const checkItem = function (e) {
  if (e.target && e.target.localName === "label") {
    const checkbox = e.target.previousElementSibling;
    checkbox.checked = !checkbox.checked;
    tapaList[e.target.innerText] = checkbox.checked;
    localStorage.setItem("tapas", JSON.stringify(tapaList));
  }
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', checkItem);

loadTapas();