function stopTime() {
    flag = true;
}

function resetTime() {
  console.log("reset");

  flag = true;
  seconds = 0;
  minutes = 0;


  formatTime();


}


function formatTime (){
    if (minutes < 10) {
        minuteElem.innerHTML = "0" + minutes;
      } else {
        minuteElem.innerHTML = minutes;
      }

      if (seconds < 10) {
        secondElem.innerHTML = "0" + seconds;
      } else {
        secondElem.innerHTML = seconds;
      }
}