// FIRST SAMPLE

const secondsE = document.querySelector("#seconds");
secondsE.innerText = `00.00.00`;
const startBE = document.getElementById("startB");
const endBE = document.getElementById("endB");

startBE.addEventListener("click", startStopper);
endBE.addEventListener("click", endStopper);

function outer() {
  let seconds = (minutes = hours = 0);
  let secondsStr = (minutesStr = hoursStr = "");

  function inner() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    if (hours === 24) {
      seconds = 0;
      minutes = 0;
      hours = 0;
    }

    secondsStr = seconds < 10 ? "0" + seconds : +seconds;
    minutesStr = minutes < 10 ? "0" + minutes : +minutes;
    hoursStr = hours < 10 ? "0" + hours : +hours;
    secondsE.innerText = `${hoursStr}.${minutesStr}.${secondsStr}`;
  }
  return inner;
}

let timer;

function startStopper() {
  const fn = outer();
  // Invoke the closures in every second
  timer = setInterval(() => {
    fn();
  }, 1000);
}

function endStopper() {
  clearInterval(timer);
}
