const left = 37;
const up = 38;
const right = 39;
const down = 40;
const a = 65;
const b = 66;

const secretCode = [up, down, up, down, left, right, left, right, b, a];
let position = 0; // Current position in secret code

document.addEventListener('keyup', (e) => {
  if (e.keyCode === secretCode[position]) {
    position++;
    if (position === secretCode.length) {
      cornify_add();
      position = 0;
    }
  } else {
    position = 0;
  }
});