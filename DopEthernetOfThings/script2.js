let lightlevel = 350;     //Уровень освещённости
let currentHour = 19;     //Времечко
let peoplePresent = true; //Людишки
var Yarkost = 0;          //Задаём переменную яркости
var PowerSaver =1

//Проверяем наличие людей в помещени
if (peoplePresent == false) {
    console.log("Людей в помещении нет. Свет выключен.")
} else {
    console.log ("Люди в помещении обнаружены. Включаю свет")
    //Проверяем и включаем режим энергосбережния
if (8< currentHour & currentHour< 18){
    console.log("Pежим энергосбережения:ON")
    PowerSaver = 1
} else{
    console.log ("Режим энергосбережния:OFF")
    PowerSaver = 0
} 


//Высчитываем требуемый уровень света исходя из освещённости
if (lightlevel < 200){
    console.log("Включаю свет на полную");
    Yarkost = 100
} else if (200<lightlevel<400) {
    console.log("Светлеет, делаю свет поменьше");
    Yarkost = 70
} else if (400<lightlevel<600){
    console.log("Достаточно светло, уменьшаю яркость");
    Yarkost = 40
} else if (lightlevel>600){
    console.log("Очень светло. Выключаю свет");
    Yarkost = 0
}
//Вычисляем уровень яркости в соответствии с энергосбережением
if (PowerSaver == 1 & Yarkost>19){
    Yarkost = Yarkost - 20;
}
//Вычисляем потребление
var potreblenie = ((Yarkost/100)*60)


console.log("Уровень освещённости:",lightlevel);
console.log ("Яркость:",Yarkost);
console.log ("Потребление:",potreblenie)
}


