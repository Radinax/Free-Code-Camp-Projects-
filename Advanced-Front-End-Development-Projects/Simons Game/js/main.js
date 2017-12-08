// GAME STATE
let random = [];
let userInputs = [];
let level = [];
let k = 0;
let turnCount = 1;
let userTurn = true;
let capture = null;
let strictt = false;
function randomArray() {
  for (let i = 0; i < 20; i++) {
    random[i] = Math.floor((Math.random() * 4));
  }
  return random;
}
function compareArraySeq(a, b) {
  return a.slice(0, b.length).join(' ') === b.slice(0, a.length).join(' ');
}
function sound(b) {
  const buttonSound = document.getElementById(b);
  buttonSound.play();
}
function changeColor(c, d) {
  document.getElementById(c).style.backgroundColor = d;
}
function setTime(c, d) {
  window.setTimeout(() => {
    document.getElementById(c).style.backgroundColor = d;
  }, 800);
  userTurn = true;
}
function disableCell(c) {
  if (document.getElementsByClassName(c).length !== 0) {
    // It's a class
    const elems = document.getElementsByClassName(c);
    for (let i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
    }
  } else if (document.getElementById(c) != null) {
    // It's an id
    document.getElementById(c).disabled = true;
  }
}
function enableCell(c) {
  if (document.getElementsByClassName(c).length !== 0) {
    // It's a class
    const elems = document.getElementsByClassName(c);
    for (let i = 0; i < elems.length; i++) {
      elems[i].disabled = false;
    }
  } else if (document.getElementById(c) !== null) {
    // It's an id
    document.getElementById(c).disabled = false;
  }
}
function off() {
  turnCount = 1;
  k = 0;
  userInputs = [];
  level = [];
  userTurn = true;
  random = [];
  document.getElementById('counter').innerHTML = '--';
  disableCell('button');
  disableCell('start');
  enableCell('on');
  clearInterval(capture);
  capture = null;
}
function sequence() {
  if (turnCount === 20) {
    console.log('You win!');
    clearInterval(capture);
    clearTimeout(capture);
    sound('winner');
    off();
  }
  switch (random[k]) {
    case 0:
      console.log('Red');
      changeColor('red', '#ff6666');
      sound('soundRed');
      setTime('red', '#ff0000');
      break;
    case 1:
      console.log('Blue');
      changeColor('blue', '#66a3ff');
      sound('soundBlue');
      setTime('blue', '#0000ff');
      break;
    case 2:
      console.log('Yellow');
      changeColor('yellow', '#ffff66');
      sound('soundYellow');
      setTime('yellow', '#e6e600');
      break;
    case 3:
      console.log('Green');
      changeColor('green', '#85e085');
      sound('soundGreen');
      setTime('green', '#008000');
      break;
    default:
      break;
  }
  k += 1;
  // console.log('k is ' + k + ' and level.length is ' + level.length) ;
  if (k === level.length) {
    clearInterval(capture);
    enableCell('button');
  }
}
function repeatSequence() {
  k = 0;
  disableCell('button');
  setTimeout(() => {
    capture = window.setInterval(sequence, 1000);
  }, 1000);
  userTurn = true;
}
function initialStatus() {
  disableCell('button');
  disableCell('start');
}
function handler(button) {
  switch (button.id) {
    case 'red':
      sound('soundRed');
      userInputs.push(0);
      changeColor('red', '#ff6666');
      setTime('red', '#ff0000');
      break;
    case 'blue':
      sound('soundBlue');
      userInputs.push(1);
      changeColor('blue', '#66a3ff');
      setTime('blue', '#0000ff');
      break;
    case 'yellow':
      sound('soundYellow');
      userInputs.push(2);
      changeColor('yellow', '#ffff66');
      setTime('yellow', '#e6e600');
      break;
    case 'green':
      sound('soundGreen');
      userInputs.push(3);
      changeColor('green', '#85e085');
      setTime('green', '#008000');
      break;
    default:
      break;
  }
  if (level.length === userInputs.length && level.every((v, b) => v === userInputs[b])) {
    console.log('correct');
    disableCell('button');
    userTurn = false;
    level.push(random[turnCount]);
    turnCount += 1;
    document.getElementById('counter').innerHTML = turnCount;
    userInputs = [];
    repeatSequence();
  } else if (!compareArraySeq(level, userInputs)) {
    sound('soundWrong');
    console.log('wrong, repeat again');
    userInputs = [];
    if (strictt === true) {
      random = randomArray(random);
      k = 0;
      turnCount = 1;
      level = [];
      level.push(random[k]);
      document.getElementById('counter').innerHTML = turnCount;
    }
    repeatSequence();
  }
}
function initializeSimon() {
  initialStatus();
  // INIT EVENT HANDLERS
  const startID = document.getElementById('start');
  startID.addEventListener('click', () => {
    if (!userTurn) return;
    userTurn = false;
    k = 0;
    level = [];
    if (random.length === 0 || strictt) {
      random = randomArray(random);
    } else if (random.length === 0 && !strictt) {
      random = randomArray(random);
    }
    level.push(random[k]);
    console.log(random);
    disableCell('start');
    // disableCell('button');
    document.getElementById('counter').innerHTML = turnCount;
    repeatSequence();
  });

  const on = document.getElementById('on');
  on.addEventListener('click', () => {
    userTurn = true;
    console.log('Game ON');
    enableCell('start');
    disableCell('on');
  });
  const strictButton = document.getElementById('strict');
  strictButton.addEventListener('click', () => {
    if (strictt === false) {
      strictt = true;
      strictButton.classList.remove('strictOff');
      strictButton.classList.add('strictOn');
    } else if (strictt === true) {
      strictt = false;
      strictButton.classList.remove('strictOn');
      strictButton.classList.add('strictOff');
    }
  });
  const colorButton = document.getElementsByClassName('button');
  for (let i = 0; i < colorButton.length; i++) {
    colorButton[i].addEventListener('click', () => {
      handler(colorButton[i]);
    });
  }
  // END INIT EVENT HANDLERS
}
window.onload = initializeSimon;
