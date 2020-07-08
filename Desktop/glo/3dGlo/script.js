

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


//слайдер
const getstartSlider = () => {
  const slide = document.querySelectorAll('.portfolio-item'),
        slider = document.querySelector('.portfolio-content');

        let dot = document.querySelectorAll('.dot');

 let currentSlide = 0,
      interval;

      const addSlide = () => {
        slide.forEach( (item, index) => {
            const li = document.createElement('li');
            li.classList.add('dot');
            if(index === item) {
                li.classList.add('dot-active');
            }
            document.querySelector('.portfolio-dots').append(li);
        });
       dot = document.querySelectorAll('.dot');
    };
    addSlide();
   

        const prevSlide = (elem, strClass) => {
          elem.classList.remove(strClass);
        };
        const nextSlide = (elem, strClass ) => {
          elem.classList.add(strClass);
        };

        const autoPlaySlide = () => {

          prevSlide(slide[currentSlide], 'portfolio-item-active');
          prevSlide(dot[currentSlide], 'dot-active');
          currentSlide++;

          if(currentSlide >= slide.length){
            currentSlide = 0;
          }

          nextSlide(slide[currentSlide] ,'portfolio-item-active');
          nextSlide(dot[currentSlide], 'dot-active');

        };

        const startSlide = (time) => {
          interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
          clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
          event.preventDefault();

          let target = event.target;

          if(!target.matches('.portfolio-btn, .dot')){
            return;
          }

          prevSlide(slide[currentSlide] , 'portfolio-item-active');
          prevSlide(dot[currentSlide], 'dot-active');

          if(target.matches('#arrow-right')){
            currentSlide++;
          }else if(target.matches('#arrow-left')){
            currentSlide--;
          }else if (target.matches('.dot')){
            dot.forEach((elem, index) => {
              if (elem === target){
                currentSlide = index;
              }
            });
          }
          if(currentSlide >= slide.length){
            currentSlide = 0;
          }
          if (currentSlide < 0){
            currentSlide = slide.length - 1;
          }
          nextSlide(slide[currentSlide] , 'portfolio-item-active');
          nextSlide(dot[currentSlide], 'dot-active');

        });
        
        slider.addEventListener('mouseover', (event) => {
          if(event.target.matches(".portfolio-btn, .dot")) {
            stopSlide();
          }
        });

        slider.addEventListener('mouseleave', (event) => {
          if(event.target.matches(".portfolio-btn, .dot")) {
            startSlide();
          }
        });
  
//наша команда

const getCommand = () => {
  const elementCommand = document.querySelector('.command>.container>.row');
    console.log(elementCommand);
  
  const changeImg = (event) => {
    const target = event.target;

    if(target.classList.contains('command__photo')){
      let src = target.src;
      target.src = target.dataset.img;
      target.dataset.img = src ;
    }
  };
  elementCommand.addEventListener('mouseenter',changeImg);
  elementCommand.addEventListener('mouseout',changeImg);

};
getCommand();

//калькулятор 

const calculator = () =>{
    const calcBlock = document.querySelector(".calc-block");

    const input = (event) => {
        const target = event.target;

        if(target.tagName === 'INPUT') {
            target.value = target.value.replace(/\D/, '');
        }
    };
    calcBlock.addEventListener('input', input);
  };
calculator();   
}
  getstartSlider(3000);
});
