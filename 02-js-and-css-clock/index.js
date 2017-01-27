// Store for tracking additional hours, minutes, seconds so we don't animate backwards ever.
const timeStore = {
  hours: 0,
  minutes: 0,
  seconds: 0
}

function iterateTime() {
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  if (hours === 0) {
    timeStore.hours += 12;
  }
  if (minutes === 0) {
    timeStore.minutes += 60;
  }
  if (seconds === 0) {
    timeStore.seconds += 60;
  }
  
  const hourPosition = (30 * (timeStore.hours + hours + 3));
  const minutePosition = (6 * (timeStore.hours + minutes + 15));
  const secondPosition = (6 * (timeStore.seconds + seconds + 15));

  hourHand.style.transform = `rotate(${hourPosition}deg)`;
  minuteHand.style.transform = `rotate(${minutePosition}deg)`;
  secondHand.style.transform = `rotate(${secondPosition}deg)`;
}

window.onload = iterateTime;