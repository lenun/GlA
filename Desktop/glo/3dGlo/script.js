

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
        let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaing(deadline){
        let dataStop = new Date(deadline).getTime(),
            dataNow = new Date().getTime(),
        timeRemaing = (dataStop - dataNow)/ 1000,
        seconds = Math.floor(timeRemaing  % 60),
        minutes= Math.floor((timeRemaing  / 60) % 60),
        hours = Math.floor(timeRemaing  /  60 / 60);
        return{timeRemaing,hours,minutes,seconds};
        
    }

    function updateClock(deadline){
        let timer = getTimeRemaing(deadline);
        if(timer.timeRemaing > 0){
        timerHours.textContent = timer.hours > 9 ? `${timer.hours}` : `0${timer.hours}`;
        timerMinutes.textContent = timer.minutes > 9 ? `${timer.minutes}` : `0${timer.minutes}`;
        timerSeconds.textContent = timer.seconds > 9 ? `${timer.seconds}` : `0${timer.seconds}`;

    }else {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
    }
    }
    setInterval(updateClock, 1000, '03 jul 2020');
});