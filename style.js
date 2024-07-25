const userButter = +prompt('Установите время готовки в секундах');
const grade = 'Колличество баллов вкусности - ';
const maxTaste = Math.round(userButter * 0.01) * 100;
const butTaste = 'Бургер сгорел((';

if (userButter <= 39) {
    alert(grade + ' ' + userButter);
}

if (userButter >= 40 && userButter <= 99) {
    alert(grade + ' ' + userButter);
}

if (userButter >= 100 && userButter <= 120) {    
    alert(grade + ' ' + maxTaste);
}

if (userButter > 120) {    
    alert(butTaste);    
}



//That is another solution

// const userButter = +prompt('Установите время готовки в секундах');
// const grade = 'Колличество баллов вкусности - ';
// const maxTaste = Math.round(userButter * 0.01) * 100;
// const butTaste = 'Бургер сгорел((';
// const data = (userButter >= 0);

// switch (data) {
//     case (userButter <= 39):
//         alert(grade + ' ' + userButter);
//         break;
//     case (userButter <= 99):
//         alert(grade + ' ' + userButter);
//         break;
//     case (userButter <= 120):    
//         alert(grade + ' ' + maxTaste);
//         break;
//     default:
//         alert(butTaste);
// }