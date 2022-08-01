// Global variables
const timer = document.querySelector('.container #display')
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

// initially taking seconds to zero value
let seconds = 0; 
let interval = null;

// stopwatch function
function stopWatch () {
  seconds ++;

  // logic to update timeer
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - (hrs * 3600)) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = '0' + secs;
  if (mins < 10) mins = '0' + mins;
  if (hrs < 10) hrs = '0' + hrs;

  // to update dynamic value of timer
  timer.innerHTML = `${hrs}:${mins}:${secs}`;
}

// On click functionality of start button
startButton.onclick = function () {
  if (interval) {
    return
  }
  interval = setInterval(stopWatch, 1000);
}

// On click functionality of stop button
stopButton.onclick = function () {
  clearInterval(interval);
  interval = null;
}

// On click functionality of reset button
resetButton.onclick = function () {
  seconds = 0;
  timer.innerHTML = '00:00:00';
}