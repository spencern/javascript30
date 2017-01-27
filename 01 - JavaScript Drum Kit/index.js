//Add listeners to all relevant keypress
//Add click event listener for all keys
//Function that adds "playing" class
//Function that plays correct sound.

const validKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

const playSound = function (key) {
  const audio = document.querySelector(`audio[data-key='${key}']`);
  audio.currentTime = 0;
  audio.play();
};

const animate = function (key) {
  const element = document.querySelector(`div[data-key='${key}']`);
  element.classList.add("playing");
  setTimeout(() => {element.classList.remove("playing")}, 100);
}

const handleClick = function () {
  const key = this.dataset.key;
  playSound(key);
  animate(key);
}
const handleKeypress = function (event) {
  const key = event.keyCode;
  if (validKeys.indexOf(key) !== -1) {
    playSound(key);
    animate(key);    
  }
}

const init = () => {
  const keys = document.getElementsByClassName("key");
  
  // Add listeners
  
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", handleClick, false);
  }
  document.addEventListener("keydown", handleKeypress, false);
};

window.onload = init;