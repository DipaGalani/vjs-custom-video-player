const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progressBar = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play and Pause Video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause icon
function updatePlayIcon() {
  const playIcon = playBtn.children[0];
  if (video.paused) {
    playIcon.classList.replace("fa-pause", "fa-play");
  } else {
    playIcon.classList.replace("fa-play", "fa-pause");
  }
}

// Update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = `0${String(mins)}`;
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = `0${String(secs)}`;
  }

  timestamp.textContent = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stopBtn.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
