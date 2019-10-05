let mainList = {
    money: prompt("Ваш бюджет", "Например, 100"),
    name: prompt("Название вашего магазина", "Например, Алена"),
    shopGoods: [],
    employers: {},
    open: false
};

mainList.shopGoods[0] = prompt("Что будем продавать?");
mainList.shopGoods[1] = prompt("Что будем продавать?");
mainList.shopGoods[2] = prompt("Что будем продавать?");
document.write("Ваш бюджет на 1 день - " + mainList.m / 30);
