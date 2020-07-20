// LANGKAH 3

// SCREEN
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
	calculatorScreen.value = number;
}

// BUTTON
const numbers = document.querySelectorAll(".number");						// Untuk mengambil element

numbers.forEach((number) => {												// Mengambil satu persatu menggunakan forEach
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	})
})

// LANGKAH 4

// INPUT NUMBER
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
}

// INPUT OPERATOR
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	})
})

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '0';
}

// CALCULATION
const calculate = () => {
	let result = '';
	switch (calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);	//jika tidak menggunakan parse maka akan terdeteksi sebagai char bukan int atau float
			break;
		case "-":
			result = prevNumber - currentNumber;
			break;
		case "*":
			result = prevNumber * currentNumber;
			break;
		case "/":
			result = prevNumber / currentNumber;
			break;
	}
	currentNumber = result;
	calculationOperator = '';
}

// EQUAL SIGN
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
	calculate();
	updateScreen(currentNumber);
})

// CLEAR BUTTON
const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentNumber);
})

// DECIMAL
const inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {										//jika angka diawali dengan 0
		return;
	}
	currentNumber += dot;
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
})


// masalah:
// ketika menginputkan kalkulasi lebih dari 2 bilangan sebelum menekan tombol =
// button persentase
// menampilkan button yang diklik