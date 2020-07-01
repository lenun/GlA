"use strict";
const 
    dayType = document.querySelector('#day-type'),
    weekDay = document.querySelector('#weekday'),
    currentTime = document.querySelector('#now-time'),
    newYearLeft = document.querySelector('#newyear-left');

const updateDate = () => {
    const daytype = date => {
        let day;
        let end;

        const hours = date.getHours();

        if (hours >= 0 && hours <= 5) {
            day = 'ночи';
            end = 'ой';
        } else if (hours >= 6 && hours <= 10) {
            day = 'утро';
            end = 'ое';
        } else if (hours >= 11 && hours <= 15) {
            day = 'день';
            end = 'ый';
        } else {
            day = 'вечер';
            end = 'ый';
        }
        dayType.innerHTML = `Добр${end} ${day}`;
    };
    const updateWeekDay = date => {
        const day = date.getDay();
		let dayName;
        switch (day) {
            case 1: {
                dayName = 'Понедельник';
                break;
            }
            case 2: {
                dayName = 'Вторник';
                break;
            }
            case 3: {
                dayName = 'Среда';
                break;
            }
            case 4: {
                dayName = 'Четверг';
                break;
            }
            case 5: {
                dayName = 'Пятница';
                break;
            }
            case 6: {
                dayName = 'Суббота';
                break;
            }
            default: {
                dayName = 'Воскресенье';
                break;
            }
        }
		weekDay.innerHTML = `Сегодня: ${dayName}<br>`;
    };

    const updateCurrentTime = date => {
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        currentTime.innerHTML = null; // обнуляем перед использованием
        currentTime.innerHTML += "Текущее время:";
        currentTime.innerHTML += h > 9 ? `${h}:` : `0${h}:`;
        currentTime.innerHTML += m > 9 ? `${m}:` : `0${m}:`;
        currentTime.innerHTML += s > 9 ? `${s}` : `0${s}`;
        currentTime.innerHTML += h >= 12 ? ' PM' : ' AM';
        currentTime.innerHTML += "<br>";
    };

    const updateNewYearLeftDays = date => { // проверка високосный год
        const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;

        newYearLeft.innerHTML = `До нового года осталось: 
        ${ 365 + (isLeapYear(date.getFullYear()) ? 1 : 0) - (date.getMonth(0 + 1)) * 30 - date.getDate()} дней`;
    };

    const now = new Date();
    daytype(now);
    updateWeekDay(now);
    updateCurrentTime(now);
    updateNewYearLeftDays(now);
};
setInterval(updateDate, 1000);