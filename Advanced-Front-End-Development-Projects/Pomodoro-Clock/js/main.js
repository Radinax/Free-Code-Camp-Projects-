const timer = document.getElementById('count-down');
const pomodoro = document.getElementsByClassName('pomodoro')[0];
const timerTitle = document.getElementsByClassName('title3')[0];
const negBreak = document.getElementById('neg-break-length');
const plusBreak = document.getElementById('plus-break-length');
const negSession = document.getElementById('neg-session-length');
const plusSession = document.getElementById('plus-session-length');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
let breakValue = document.getElementById('break-length-value').innerHTML;
let sessionValue = document.getElementById('session-length-value').innerHTML;
timer.innerHTML = sessionValue + ':' + '00';
let timeValue = parseInt(timer.innerHTML)*60;
let seconds = 60;
let originalTimeValue = sessionValue;
let originalBreakValue = breakValue;
let breakTime = false;
console.log(timeValue);

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
function workflow () {
    negBreak.addEventListener ('click', () => {
        if (breakValue > 1) {
            breakValue--;
        }
        document.getElementById('break-length-value').innerHTML = breakValue;
    });
    plusBreak.addEventListener ('click', () => {
        breakValue++;
        document.getElementById('break-length-value').innerHTML = breakValue;
    });
    negSession.addEventListener ('click', () => {
        if (sessionValue > 1) {
            sessionValue--;
        }
        document.getElementById('session-length-value').innerHTML = sessionValue;
        timer.innerHTML = sessionValue + ':' + '00';
        originalTimeValue = sessionValue;
    });
    plusSession.addEventListener ('click', () => {
        if (sessionValue < 25) {
            sessionValue++;
        }
        document.getElementById('session-length-value').innerHTML = sessionValue;
        timer.innerHTML = sessionValue + ':' + '00';
        originalTimeValue = sessionValue;
    });
    pomodoro.addEventListener('click', () => {
        negBreak.style.pointerEvents = 'none';
        plusBreak.style.pointerEvents = 'none';
        negSession.style.pointerEvents = 'none';
        plusSession.style.pointerEvents = 'none';
        pomodoro.style.pointerEvents = 'none';
        if (sessionValue === originalTimeValue) {
            sessionValue--;
            console.log(sessionValue);
            seconds = 60;
            timer.innerHTML = sessionValue + ':' + (seconds-1);
        }
        let countdown = () => {
            seconds--;
            if (sessionValue === 0 && seconds === 0) {
                breakTime = true;
                document.getElementsByClassName('title-3')[0].innerHTML = 'BREAK TIME';
                if (breakValue === originalBreakValue) {
                    breakValue--;
                    seconds = 60;
                    timer.innerHTML = breakValue + ':' + (seconds-1);
                }
            }
            if (breakValue === 0 && seconds === 0) {
                document.getElementsByClassName('title-3')[0].innerHTML = 'SET NEW TIMERS AND PRESS RESET';
                clearInterval(cleaner);
            }
            if (!breakTime) {
                if (seconds < 10) {
                    timer.innerHTML = sessionValue + ':' + '0' + seconds;
                } else  {
                    timer.innerHTML = sessionValue + ':' + seconds;
                }
                if (seconds === 0) {
                    sessionValue -= 1;
                    seconds = 60;
                }
            } else if(breakTime) {
                if (seconds < 10) {
                    timer.innerHTML = breakValue + ':' + '0' + seconds;
                } else  {
                    timer.innerHTML = breakValue + ':' + seconds;
                }
                if (seconds === 0) {
                    breakValue -= 1;
                    seconds = 60;
                }
            }
        };
        let cleaner = setInterval(countdown, 1000);
        pause.addEventListener ('click', () => {
            clearInterval(cleaner);
            pomodoro.style.pointerEvents = 'auto';
        });
        reset.addEventListener ('click', () => {
            clearInterval(cleaner);
            pomodoro.style.pointerEvents = 'auto';
            negBreak.style.pointerEvents = 'auto';
            plusBreak.style.pointerEvents = 'auto';
            negSession.style.pointerEvents = 'auto';
            plusSession.style.pointerEvents = 'auto';
            document.getElementsByClassName('title-3')[0].innerHTML = 'SESSION';
            timer.innerHTML = originalTimeValue + ':' + '00';
        });
    });
    
    
}
window.onload = workflow;