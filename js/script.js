let time, m, n, price;

function start() {
    time = 21;
    m = +prompt("Ваш бюджет", "Например, 100");
    while (isNaN(m) || m == "" || m == null) {
        console.log("Вы должны ввести число");
        m = prompt("Ваш бюджет", "Например, 100");
    }
    n = prompt("Название вашего магазина", "Например, Алена").toUpperCase();
}

start();

let mainList = {
    money: m,
    name: n,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true
};

function discount() {
    if (mainList.discount) {
        mainList.money = mainList.money * 0.8;
    }
}
discount();

function chooseGoods() {
    let i = 0;
    do {
        let a = prompt("Что будем продавать?");
        console.log(typeof a);
        if (isNaN(+a) && (a != null && a != "" && a.length < 50)) {
            mainList.shopGoods[i] = a;
        } else {
            i--;
        }
        i++;
    } while (i < 5);
}
chooseGoods();

function workTime(time) {
    if (time > 9 && time < 20) {
        console.log("За работу негры!");
    } else if (time >= 20 && time <= 24) {
        console.log("Уже поздно, пиздуйте домой");
    } else if (time > 0 && time <= 9) {
        console.log("Можете отдыхать");
    }
}

workTime(15);

function moneyPerDay() {
    console.log("Ваш бюджет на 1 день - " + mainList.money / 30);
}

moneyPerDay();

function employers() {
    for (let i = 0; i < 4; i++) {
        mainList.employers[i] = prompt("Ваше имя");
    }
}
employers();

console.log(mainList);
