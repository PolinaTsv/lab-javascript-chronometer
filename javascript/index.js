const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let mins = chronometer.getMinutes();
  const doubleDigitMin = chronometer.computeTwoDigitNumber(mins)
  minDecElement.innerHTML = doubleDigitMin[0];
  minUniElement.innerHTML = doubleDigitMin[1];
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  const doubleDigitSec = chronometer.computeTwoDigitNumber(sec);
  secDecElement.innerHTML = doubleDigitSec[0];
  secUniElement.innerHTML = doubleDigitSec[1];
  console.log(doubleDigitSec);
}

// ==> BONUS
function printMilliseconds() {
  //
}

function printSplit() {
  let li = document.createElement('li');
  li.setAttribute = ('class', 'list-item');
  li.innerHTML = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  let splits = document.querySelectorAll('li');
  for (let split of splits) {
    splitsElement.removeChild(split);
  }
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
  
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});
console.log();

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) printSplit();
  else {
    clearSplits();
    chronometer.reset();
    printTime();
  }
});
