let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	discount_btn = document.getElementsByTagName('button')[4],
    discount_btn_off = document.getElementsByTagName('button')[5],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll ('.hire-employers-item');

let budget,
	price;

open.addEventListener('click', () => {
    let timer = setTimeout(start, 2000);
});

function start() {
    budget = prompt('What is your budget?');

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt('What is your budget?');
	}
	budget_value.textContent = budget;

	name_value.textContent = prompt('What is your shop name?').toUpperCase();

}

goods_btn.addEventListener('click', () => {
				for (let i = 0; i < goods_item.length; i++) {
						let a = ' ' + goods_item[i].value
						if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
							console.log('All is correct!');
							mainList.shopGoods[i] = a;
							goods_value.textContent = mainList.shopGoods;
						} else {
							i = i - 1;
						}
					}
});

choose_item.addEventListener('change', () => {
			let items = choose_item.value;
			if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(",");
			mainList.shopItems.sort();

			items_value.textContent = mainList.shopItems;
		}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;
				if(time < 0) {
				console.log('It is impossible!');
				mainList.open = false;
			} else if(time > 8 && time < 20) {
				console.log('It is time to work!');
				mainList.open = true;
				} else if(time < 24) {
				console.log('It is too late!');
				mainList.open = false;
					} else { 
						console.log('There is only 24 hours in a day!');
						mainList.open = false;
			};

	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green'
	} else {
		isopen_value.style.backgroundColor = 'red'
	}
});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = budget / 30;
});

employers_btn.addEventListener('click', () => {

for (let i = 0; i < hire_employers_item.length; i++) {
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;

		employers_value.textContent += mainList.employers[i] + ', ';
	}
});

discount_btn.addEventListener('click', () => {
	discount_value.style.backgroundColor = 'green'
});

discount_btn_off.addEventListener('click', () => {
	discount_value.style.backgroundColor = 'red'
});

let mainList = { 
	budget: budget,
	shopName: name_value.textContent,	
	open: false,
	shopGoods: [],
	employers: {},
	discount: true,
	shopItems: []	
};

console.log(mainList);

console.log("123");