// FIRST SAMPLE

const secondsE = document.querySelector("#seconds");

function outer() {
  let seconds = (minutes = hours = 0);
  let secondsStr = (minutesStr = hoursStr = "");

  function inner() {
    seconds++;
    if (seconds === 61) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 61) {
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

const fn = outer();
// Invoke the closures in every second
setInterval(() => {
  fn();
}, 1000);

// SECOND SAMPLE - CACHING A HIGH COMPUTED DATA INTO AN OBJECT

// function squareMemoized() {
//   cache = {};
//   function square(number) {
//     if (number in cache) {
//       console.log("Return from cache");
//       return cache[number];
//     } else {
//       console.log("Calculated");
//       const result = number * number;
//       cache[number] = result;

//       return result;
//     }
//   }
//   return square;
// }

// const fn = squareMemoized();
// console.log(fn(2));
// console.log(fn(12));
// console.log(fn(20));
// console.log(fn(20));
