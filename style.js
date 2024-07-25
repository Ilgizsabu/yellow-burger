const userButter = +prompt('Установите время готовки в секундах');
const grade = 'Колличество баллов вкусности - ';
const maxTaste = Math.round(userButter * 0.01) * 100;
const badTaste = 'Бургер сгорел((';

if (userButter < 40 || (userButter > 39 && userButter < 100)) {
    alert(grade + userButter);
}

if (userButter > 99 && userButter < 120) {    
    alert(grade + maxTaste);
} else if (userButter > 119) {    
    alert(badTaste);    
}



//That is first solution

// const userButter = +prompt('Установите время готовки в секундах');
// const grade = 'Колличество баллов вкусности - ';
// const maxTaste = Math.round(userButter * 0.01) * 100;
// const badTaste = 'Бургер сгорел((';
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
//         alert(badTaste);
// }