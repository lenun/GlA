

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
        let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
 
    //таймер
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

const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector(' menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItem = document.querySelectorAll('ul>li');
        
    
    let handLerMenu = () => {
        if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
            menu.style.transform = `translate(0)`;
        }else{
            menu.style.transform = `translate(-100%)`;
        }
    };

    btnMenu.addEventListener('click', handLerMenu);
    closeBtn.addEventListener('click',handLerMenu);
    menuItem.forEach((elem) => elem.addEventListener('click',handLerMenu));
};
    //попит
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn');
      console.log(popup);
    let 
      count = 0,
      gap;

    const animation = () => {
      gap = requestAnimationFrame(animation);
      count++;

      if (count <= 50) {
        popup.style.opacity = count / 50;
      } else {
        count = 0;
        cancelAnimationFrame(gap);
      }
    };

    popupBtn.forEach((elem) =>
      elem.addEventListener('click', () => {
        if (document.documentElement.clientWidth >= 768) {
          gap = requestAnimationFrame(animation);
        }
        popup.style.display = 'block';
      })
    );

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };
  toggleMenu();
  togglePopup();
});