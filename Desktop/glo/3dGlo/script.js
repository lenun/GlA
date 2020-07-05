


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
  setInterval(updateClock, 1000, '10 jul 2020');
  
//меню

const toggleMenu = () => {
const menu = document.querySelector('menu');
    
      
  const getAct = () =>
   menu.classList.toggle('active-menu');

      document.body.addEventListener('click', event => {
          let target = event.target;
          console.log(target);

          if(target.classList.contains('close-btn') || target.closest('.menu')) { 
              return getAct();
          }

      });
  };
  toggleMenu();

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
togglePopup();

//табы

const tabs = () => {
      const
          tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
      
      const toggleTabs = (index) => {
          for(let i = 0; i  < tabContent.length; i++){
              if(index === i) {
                tab[i].classList.add('active'); 
                tabContent[i].classList.remove('d-none');
                   
              } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
               
              }
            }
          };
      

      tabHeader.addEventListener('click', event => {
          let target = event.target.closest('.service-header-tab');


          if(target) {
             tab.forEach((item,i) =>{
               if (item === target){
                 toggleTabs(i);
               }
             });
          }
          
      });
  };
tabs();
});
