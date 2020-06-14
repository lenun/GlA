let week = ['Понедельник','Вторник' ,'Среда','Четверг','Пятница', 'Суббота','Воскресенье'];

for (let i = 0; i< week.length; i++ ) {
    let html = week[i];
    if (i === 0){
     html = html.italics();}
    else if (i > 4){ html = html.bold();} 

    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);


