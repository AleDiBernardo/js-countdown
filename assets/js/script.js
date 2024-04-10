let sec = 48;
let maxSec=60;
const printResult = document.getElementById("print");

const countdown = setInterval(function () {

  if (sec > 49) {
    printResult.innerHTML = maxSec - sec;
    if (sec === maxSec) {
      printResult.innerHTML = `<img src="../img/meme.webp">`;

      clearInterval(countdown);
    }
  }

  console.log(sec);
  sec++;
}, 1000);
