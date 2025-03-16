const startButton = document.getElementById("startButton");
const timeInput = document.getElementById("timeInput");
const countdownDisplay = document.getElementById("countdownDisplay");
const pauseResumeButton = document.getElementById("pauseResumeButton");

let timer;
let remainingSeconds = 0;
let isPaused = false;

function startTimer() {
  remainingSeconds = parseInt(timeInput.value);

  if (isNaN(remainingSeconds)) {
    countdownDisplay.innerText = "Please enter a valid number.";
    return;
  }

  if (remainingSeconds <= 0) {
    countdownDisplay.innerText = "Please enter seconds > 0.";
    return;
  }

  pauseResumeButton.disabled = false;
  startButton.disabled = true;

  updateTimer();
}

function updateTimer() {
  timer = setInterval(function () {
    remainingSeconds--;
    countdownDisplay.innerText = `Time remaining ${remainingSeconds} seconds`;

    if (remainingSeconds <= 0) {
      clearInterval(timer);
      countdownDisplay.innerText = "Time is Up";
      startButton.disabled = false;
      pauseResumeButton.disabled = true;
    }
  }, 1000);
}

function pauseResumeTimer() {
  if (!isPaused) {
    clearInterval(timer);
    //console.log(remainingSeconds);
    isPaused = true;
    pauseResumeButton.innerText = "Resume";
  } else {
    isPaused = false;
    pauseResumeButton.innerText = "Pause";
    updateTimer();
  }
}

startButton.addEventListener("click", startTimer);
pauseResumeButton.addEventListener("click", pauseResumeTimer);
