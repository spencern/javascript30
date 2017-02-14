const video = document.querySelector('video.viewer');
const playButton = document.querySelector('.player__button.toggle');
const skipButtons = document.querySelectorAll('.player__button:not(.toggle)');
const playbackRateSlider = document.querySelector('input[name="playbackRate"]');
const volumeSlider = document.querySelector('input[name="volume"]');
const progressDiv = document.querySelector('.player__controls .progress');
const progressFilled = document.querySelector('.player__controls .progress .progress__filled');
let scrubbing = false;

function updateProgressBar () {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${progress}%`;
  progressFilled.style.flexBasis = `${progress}%`;
}

function scrubMouseDown (event) {
  scrubbing = true;
  scrub(event);
}

function scrubMouseMove (event) {
  if (scrubbing) {
    scrub(event);
  }
}

function scrubMouseOut () {
  scrubbing = false;
}

function scrubMouseUp(event) {
  scrubbing = false;
  scrub(event);
};

function scrub (event) {
  const progressWidth = progressDiv.offsetWidth;
  const progressTick = video.duration / 100;
  const progress = event.offsetX / progressWidth * 100;
  video.currentTime = progress * progressTick;
};

function changePlaybackRate () {
  video.playbackRate = this.value;
};

function changeVolume () {
  video.volume = this.value;
};

function skip () {
  const skipAmount = parseInt(this.dataset.skip, 10);
  const cur = video.currentTime;
  if (cur + skipAmount <= 0) {
    video.currentTime = 0;
  } else if (cur + skipAmount >= video.duration) {
    video.currentTime = video.duration;
  } else {
    video.currentTime = cur + skipAmount;
  }
};

function togglePlay () {
  if (video.paused) {
    video.play();  
  } else {
    video.pause();
  }
};

video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);
skipButtons.forEach(b => b.addEventListener("click", skip));

volumeSlider.addEventListener('change', changeVolume);
volumeSlider.addEventListener('mousemove', changeVolume);

playbackRateSlider.addEventListener('change', changePlaybackRate);
playbackRateSlider.addEventListener('mousemove', changePlaybackRate);

video.addEventListener("timeupdate", updateProgressBar);

progressDiv.addEventListener('mousedown', scrubMouseDown);
progressDiv.addEventListener('mouseup', scrubMouseUp);
progressDiv.addEventListener('mouseout', scrubMouseOut);
progressDiv.addEventListener('mousemove', scrubMouseMove);