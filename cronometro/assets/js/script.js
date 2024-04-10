// Bonus per i più curiosi:
// In una cartella a parte create il cronometro che mostra
// secondi e minuti.
// Inserite un bottone per avviare il cronometro, un'altro
// bottone per stoppare il cronometro e un'altro bottone ancora
// per resettare il cronometro.
// Dopo averlo implementato fatevi questa domanda:
// :faccia_pensosa: che cosa succede se utente clicca sull'avvia più volte?

const secondElem = document.getElementById("second");
const minuteElem = document.getElementById("minute");
const buttons = document.querySelectorAll("button");

let seconds = 0,
  minutes = 0,
  flag = false,
  startCount = 0;

//Added event listener to stop btn
buttons[0].addEventListener("click", stopTime);

//Added event listener to start btn
buttons[1].addEventListener("click", startTime);

//Added event listener to reset btn
buttons[2].addEventListener("click", resetTime);

function startTime() {
  flag = false;

  if (startCount === 0) {
    let timer = setInterval(function () {
      if (flag) {
        clearInterval(timer);
      } else {
        if (seconds < 59) {
          seconds++;
          formatTime();
        } else {
          seconds = 0;
          minutes++;
          formatTime();
        }
      }
    }, 1000);
  }
  startCount++;

}
