const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let prevChecked = null;
let shiftDown = false;

function shiftDownHandler (event) {
  if (event.which === 16) {
    shiftDown = true;
  }
}

function shiftUpHandler (event) {
  if (event.which === 16) {
    shiftDown = false;
  }
}

function checkboxHandler (event) {
  const inbox = document.querySelector(".inbox");
  
  if (shiftDown && prevChecked && this.checked) {
    let cboxes;
    const checkboxIndex = Array.prototype.indexOf.call(inbox.childNodes, this.parentNode);
    const prevCheckboxIndex = Array.prototype.indexOf.call(inbox.childNodes, prevChecked.parentNode);
    if (checkboxIndex > prevCheckboxIndex) {
      cboxes = getCheckboxesBetween(inbox, prevChecked, this);
    } else {
      cboxes = getCheckboxesBetween(inbox, this, prevChecked);
    }
    cboxes.forEach(cbox => cbox.checked = true);
  }
  prevChecked = this;
}

function getCheckboxesBetween(root, start, end) {
  let searchedPastStart = false;
  let reachedEnd = false;
  const cboxes = [];
  
  function getCheckboxes (node) {
    if (node === start) {
      searchedPastStart = true;
    } else if (node === end) {
      reachedEnd = true;
    } else if (node.nodeType === 1 && node.nodeName === "INPUT") {
      if (searchedPastStart && !reachedEnd) {
        cboxes.push(node);
      }
    } else {
      node.childNodes.forEach(childNode => {
        if (!reachedEnd) {
          getCheckboxes(childNode);
        }
      });
    }
  }
  getCheckboxes(root);
  return cboxes;
}

checkboxes.forEach(cb => cb.addEventListener("click", checkboxHandler));
document.addEventListener("keydown", shiftDownHandler);
document.addEventListener("keyup", shiftUpHandler);