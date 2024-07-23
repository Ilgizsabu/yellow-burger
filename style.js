const userButter = +prompt(' Установите время готовки в секундах');
    switch (true) {
        case (userButter <= 20):
            alert('20 - Баллов вкусности');
            break;
        case (userButter <= 40):
            alert('40 - Баллов вкусности');
            break;
        case (userButter <= 144):
            alert('80 - Баллов вкусности');
            break;
        case (userButter <= 200):
            alert('100 - Баллов вкусности');
            break;
        case (userButter >= 201):
            alert('0 - Баллов вкусности, бургер сгорел((');
    }
