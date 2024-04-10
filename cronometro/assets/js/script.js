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

let seconds = 57,
  minutes = 0,
  flag = false;

buttons[0].addEventListener("click", stopTime);
buttons[1].addEventListener("click", startTime);
buttons[2].addEventListener("click", resetTime);

function startTime() {
  flag = false;

  let timer = setInterval(function () {
    if (flag) {
      clearInterval(timer);
    } else {
      if (seconds < 59) {
        console.log(seconds);
        seconds++;

        formatTime();

      } else {
        seconds = 0;
        secondElem.innerHTML = 0;
        minutes++;

        formatTime();


        console.log(minutes);
      }
    }
  }, 1000);
}
