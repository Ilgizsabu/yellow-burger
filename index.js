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