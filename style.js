const userButter = +prompt('Установите время готовки в секундах');
const grade = 'Баллов вкусности!';
    switch (true) {
        case (userButter <= 20):
            alert(`20: ${grade}`);
            break;
        case (userButter <= 40):
            alert(`40: ${grade}`);
            break;
        case (userButter <= 144):
            alert(`80: ${grade}`);
            break;
        case (userButter <= 200):
            alert(`100: ${grade}`);
            break;
        case (userButter >= 201):
            alert('0 - Баллов вкусности!, бургер сгорел((');
    }