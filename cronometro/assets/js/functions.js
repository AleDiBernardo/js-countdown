function stopTime() {
  flag = true;
  startCount = 0;
}

function resetTime() {
  flag = true;
  seconds = 0;
  minutes = 0;
  startCount = 0;
  formatTime();
}

function formatTime() {
  minutes < 10
    ? (minuteElem.innerHTML = "0" + minutes)
    : (minuteElem.innerHTML = minutes);
  seconds < 10
    ? (secondElem.innerHTML = "0" + seconds)
    : (secondElem.innerHTML = seconds);
}
