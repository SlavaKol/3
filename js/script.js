let mainList = {
    money: prompt("Ваш бюджет", "Например, 100"),
    name: prompt("Название вашего магазина", "Например, Алена"),
    shopGoods: [],
    employers: {},
    open: false
};
let i = 0;
do {
    let a = prompt("Что будем продавать?");
    console.log(typeof a);
    if (isNaN(+a) && (a != null && a != "" && a.length < 50)) {
        mainList.shopGoods[i] = a;
        console.log("Все ОК");
    } else {
        console.log("Not OK");
        i--;
    }
    i++;
} while (i < 5);

mainList.shopGoods[1] = prompt("Что будем продавать?");
mainList.shopGoods[2] = prompt("Что будем продавать?");
document.write("Ваш бюджет на 1 день - " + mainList.money / 30);
