'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements) {
    containerMovements.innerHTML = ''
    movements.forEach((el, i) => {
        const type = el > 0 ? 'deposit' : 'withdrawal'
        const html = `
   <div class="movements__row">
          <div class="movements__type
           movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${el}€</div>
        </div>`
        containerMovements.insertAdjacentHTML('afterbegin',html)
    })
}
displayMovements(account1.movements)
/////////////////////////////////////////////////




/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////
//////////slice
/*
let arr = ['a','b','c','d','e']
arr.slice(2) //вернет новый массив [c,d,e]
arr.slice(2,4) //вернет новый массив [c,d]
*/

/////////SPLICE // мутирует массив

/*arr.splice(2) //вернет новый массив [c,d,e] а оригинаал станет ['a','b']
arr.splice(-1) //['a','b','c','d']*/

///REVERSE переворачивает массив мутирует
//CONCAT соединяет массивы
//JOIN из массива в строку в скобках разделитель
//AT

/*const arr =[23,11,64]
console.log(arr[0]) //23
console.log(arr.at(0))//23
//last element
console.log(arr[arr.length-1])//64
console.log(arr.slice(-1)[0])//64
console.log(arr.at(-1))//64*/


//forEACH возвращает андефаинд

/*

for(const [i,movement] of movements.entries()){
}
movements.forEach((el,index,array)=>{
  console.log(index+1 ,el*10)
})
*/
/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((el,key,ar)=>{
  console.log(`${key}: ${el}`)
})*/
const dogsJulia =[3, 5, 2, 12, 7]
const dogsKate =[4, 1, 15, 8, 3]
/*Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]*/
const checkDogs = (dogsJulia,dogsKate) => {
    let copyJulia = [...dogsJulia]
     copyJulia.splice(-2)
    copyJulia.shift()
    let allDog = [...copyJulia,...dogsKate]
    for (let i = 0; i< allDog.length;i++){
        allDog[i] >= 3 ? console.log(`Dog number ${[i +1]} взрослая, ей ${allDog[i]} years `) : console.log(`Dog number ${[i+1]} щенок, ему ${allDog[i]} years`)
    }
}
checkDogs(dogsJulia,dogsKate)

//filter возвращает новый массив
//reduce возвращая одно результирующее значение. acc + current

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const newArr = movements.map((m)=>{
    return Math.trunc(m * 1.1)
})
console.log(newArr)