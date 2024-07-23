const userButter = +prompt('Установите время готовки в секундах');
const grade = 'Колличество баллов вкусности - ';
const maxTaste = Math.round(userButter * 0.01) * 100;
const butTaste = 'Бургер сгорел((';
const data = (userButter >= 0);

switch (data) {
    case (userButter <= 39):
        alert(grade + ' ' + userButter);
        break;
    case (userButter <= 99):
        alert(grade + ' ' + userButter);
        break;
    case (userButter <= 120):    
        alert(grade + ' ' + maxTaste);
        break;
    default:
        alert(butTaste);
}