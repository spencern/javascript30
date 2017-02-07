const canvas = document.querySelector('#draw');

const context = canvas.getContext('2d');

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
const minLineWidth = 1;
const maxLineWidth = 25;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = maxLineWidth;
context.globalCompositeOperation = "source-over";


function draw(e) {
  if (!isDrawing) {
    return;
  }
  context.strokeStyle = `hsla(${hue}, 100%, 50%, ${context.lineWidth})`;

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (context.lineWidth >= maxLineWidth || context.lineWidth <= minLineWidth) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}


// Listeners for drawing
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);