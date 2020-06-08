var lang= prompt('ru или en');

if (lang === 'ru'){
    console.log('Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресельние');
}else if (lang === 'en'){
    console.log('Monday,Tuesday,Wensday,Thursday,Friday,Saturday,Sunday');
}else{
    console.log('Упс, что-т пошло не так');
}
var lang=prompt('ru или en');
switch(lang){
    case('ru'):
    console.log('Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресельние');
    break;
    case('en'):
    console.log('Monday,Tuesday,Wensday,Thursday,Friday,Saturday,Sunday');
    break;
    default:
        console.log('Упс, что-т пошло не так');
}
var lang=prompt('ru или en');

lang_array=[];
lang_array['ru']=['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресельние'];
lang_array['en']=['Monday','Tuesday','Wensday','Thursday','Friday','Saturday','Sunday'];
console.log(lang_array[lang]);

var namePerson = prompt('Введите имя');
namePerson === 'Артем' ? console.log('Вы директор') : namePerson === 'Максим' ?  console.log('Вы преподаватель') : console.log('Вы студент');