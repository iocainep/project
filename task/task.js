/*Первое усложненное задание*/

let week = [ // Создаем массив с днями недели
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
]; 
var d = new Date(); // в переменную d заносим текущую дату
var n = d.getDay(); // в переменную n заносим номер дня недели

for (let i=0; i < 7; i++) {
	if(week[i] === week[n]) {
		document.write("<br \/>", week[i].italics()); 	// текущий день выводим курсивом
	} else if(week[i] === week[5] || week[i] === week[6]) { 
		document.write("<br \/>", week[i].bold()); 		// выходные выводим полужирным
	} else if(week[n] === week[5] || week[n] === week[6]) {
		document.write("<br \/>", week[i].bold().italics()); // если текущий день совпадет с выходным, выводим в курсиве и полужирным
	} else { 
        document.write("<br \/>", week[i]); // если день не выходной и не текущий, выводим как есть
    }
	}

/*Второе усложненное задание*/

let arr = ["434535","565345","768434","456372","543523","334734", "37545445"];

document.write("<br \/>У нас имеется следующий массив: ", arr);
document.write("<br \/>Из этого массива мы выбираем только те числа, которые начинаются на 3 или 7:<br \/>")

for (i = 0; i < 7; i++) {
	if(arr[i].substr(0,1) === "3" || arr[i].substr(0,1) === "7") {
		document.write(" ", arr[i]);
	} else {
		i++;
	}
}

/*Третье усложненное задание*/

let str = 'урок-3-был слишком легким';
str = str.charAt(0).toUpperCase() + str.substr(1); // берем первый символ строки, делаем его верхним регистром и склеиваем с строкой начиная с 1 элемента (р)
str = str.replace(/-/g,' '); // g - это флаг, чтобы замена носила глобальный характер
console.log(str)
str = str.substr(0, 18) // вырезаем слово "легким", взяв символы от 0 до 18
str = str.replace(str.substr(16, 2), "оо"); // заменяем два последних символа на о

let arrNew = [];
let arr = [20, 33, 1, 'Человек1', 2, 3];
for(i = 0; i < 5; i++){
	arrNew[i] = arr[i] * arr[i] * arr[i];
}
let n = arrNew[0] + arrNew[1] + arrNew[2] + arrNew[3] + arrNew[4] + arrNew[5];
console.log(Math.sqrt(n))