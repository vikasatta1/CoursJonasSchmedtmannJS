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

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = ''

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements
    movs.forEach((el, i) => {
        const type = el > 0 ? 'deposit' : 'withdrawal'
        const html = `
   <div class="movements__row">
          <div class="movements__type
           movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${el}???</div>
        </div>`
        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}
const calcDisplayBalance = (acc) => {

    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)

    labelBalance.textContent = `${acc.balance} EUR`
    console.log('calcDisplayBalance')
}
const calcDisplaySummary = (acc) => {
    const incomes = acc.movements.filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur, 0)
    labelSumIn.textContent = `${incomes}???`
    const out = acc.movements.filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur, 0)
    labelSumOut.textContent = `${Math.abs(out)}???`
    const interest = acc.movements.filter(mov => mov > 0)
        .map(dep => (dep * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            return int >= 1
        })
        .reduce((acc, inc) => acc + inc, 0)
    labelSumInterest.textContent = `${interest}???`
}
const createUserName = (accounts) => {
    return accounts.forEach(el =>
        el.username = el.owner
            .toLowerCase()
            .split(' ')
            .map(el => el[0])
            .join(''))
}
createUserName(accounts)
const updateUI = (acc) => {
    displayMovements(acc.movements)
    calcDisplayBalance(acc)
    calcDisplaySummary(acc)
}

/////////////////////////////////////////////////

//Event handler
let currentAccount;

//LOGIN BUTTON
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();

    currentAccount = accounts.find(el => el.username === inputLoginUsername.value)
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome back,
         ${currentAccount.owner.split(' ')[0]
        }`
        inputLoginPin.blur()
        containerApp.style.opacity = 100
        inputLoginUsername.value = inputLoginPin.value = ''

        updateUI(currentAccount)


    }
})
/////Transfer money BLOCK
/*inputTransferTo
inputTransferAmount
btnTransfer*/
///BUTTON
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault()
    const amount = Number(inputTransferAmount.value)
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value)


    if (amount > 0 && currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username) {

        currentAccount.movements.push(-amount)
        receiverAcc.movements.push(amount)


        updateUI(currentAccount)
    }
    inputTransferTo.value = inputTransferAmount.value = ''
})

btnLoan.addEventListener('click', function (e) {
    e.preventDefault()

    const amount = Number(inputLoanAmount.value)
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        currentAccount.movements.push(amount)

        updateUI(currentAccount)
    }
    inputLoanAmount.value = ''
})

//CLOSE
btnClose.addEventListener('click', function (e) {
    e.preventDefault()

    if (inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username)
        accounts.splice(index, 1)
        containerApp.style.opacity = 0
        console.log(accounts)

    }
    inputCloseUsername.value = inputClosePin.value = ''
})
let sorted = false
btnSort.addEventListener('click', function (e) {
    e.preventDefault()
    displayMovements(currentAccount.movements, !sorted)
    sorted = !sorted
})
/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////
//////////slice
/*
let arr = ['a','b','c','d','e']
arr.slice(2) //???????????? ?????????? ???????????? [c,d,e]
arr.slice(2,4) //???????????? ?????????? ???????????? [c,d]
*/

/////////SPLICE // ???????????????? ????????????

/*arr.splice(2) //???????????? ?????????? ???????????? [c,d,e] ?? ?????????????????? ???????????? ['a','b']
arr.splice(-1) //['a','b','c','d']*/

///REVERSE ???????????????????????????? ???????????? ????????????????
//CONCAT ?????????????????? ??????????????
//JOIN ???? ?????????????? ?? ???????????? ?? ?????????????? ??????????????????????
//AT

/*const arr =[23,11,64]
console.log(arr[0]) //23
console.log(arr.at(0))//23
//last element
console.log(arr[arr.length-1])//64
console.log(arr.slice(-1)[0])//64
console.log(arr.at(-1))//64*/


//forEACH ???????????????????? ??????????????????

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
// const dogsJulia =[3, 5, 2, 12, 7]
// const dogsKate =[4, 1, 15, 8, 3]
// /*Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// ?? Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]*/
// const checkDogs = (dogsJulia,dogsKate) => {
//     let copyJulia = [...dogsJulia]
//      copyJulia.splice(-2)
//     copyJulia.shift()
//     let allDog = [...copyJulia,...dogsKate]
//     for (let i = 0; i< allDog.length;i++){
//         allDog[i] >= 3 ? console.log(`Dog number ${[i +1]} ????????????????, ???? ${allDog[i]} years `) : console.log(`Dog number ${[i+1]} ??????????, ?????? ${allDog[i]} years`)
//     }
// }
// checkDogs(dogsJulia,dogsKate)
//
// //filter ???????????????????? ?????????? ????????????
// //reduce ?????????????????? ???????? ???????????????????????????? ????????????????. acc + current
//
//
// const newArr = movements.map((m)=>{
//     return Math.trunc(m * 1.1)
// })
//
/*

const withDrawals = movements.filter(el => el < 0)
console.log(withDrawals)*/
//reduce ?????????????????? ???????? ???????????????????????????? ????????????????. acc + current

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
let la = movements.reduce((acc, cur) => acc + cur, 0)
console.log(la)*/
/*let la = movements.reduce((acc,cur)=>{
    if(acc > cur)return acc;
    else return cur
},movements[0])*/

/*
let dogArr = [5, 2, 4, 1, 15, 8, 3]
let calcAverageHumanAge = (ageArr) => {
let humanAge = ageArr.map(dogAge => dogAge <=2 ? 2 * dogAge : 16 + dogAge * 4 )
    console.log(humanAge)
   let filter = humanAge.filter(dogAge => dogAge <19)
    console.log(filter)
    let sredni = Math.trunc(humanAge.reduce((acc,cur)=>acc + cur,0) / humanAge.length)
    console.log(sredni)
}

calcAverageHumanAge(dogArr)*/
/*
const eurToUsd = 1.1
const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd)
    .reduce((acc, cur) => acc + cur, 0)
*/

//////FIND ???????????????????? ??????????????
//////FINDINDEX ???????????????????? ???????????? ????????????????
/*const bankDeposit = accounts.flatMap(el=> el.movements).filter(el=>el > 0).reduce((a,b)=>a+b)
const numDeposits1000 = accounts.flatMap(el=> el.movements).filter(el=>el >= 1000).length
const reduceDeposit1000 = accounts.flatMap(acc=>acc.movements)
    .reduce((count,cur)=>cur >= 1000? count +1 : count ,0)
console.log(bankDeposit)
console.log(numDeposits1000)
console.log(reduceDeposit1000)*/
/*const {deposits,withDrawals} = accounts.flatMap(el=> el.movements)
    .reduce((sums,cur)=>{
cur > 0 ? sums.deposits +=cur : sums.withDrawals +=cur
        return sums
     },{deposits: 0 , withDrawals: 0})*/


const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']},
];

//1
dogs.forEach(dog => {
    dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)
})
//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(dogSarah)
console.log(dogSarah.curFood > dogSarah.recFood ? '?????? ??????????' : "?????? ????????")

//3
const EatTooLittle = dogs.filter(dogs => dogs.curFood < dogs.recFood)
    .map(dog=>dog.owners).flat()
const EatTooBig = dogs.filter(dogs => dogs.curFood > dogs.recFood)
    .map(dog=>dog.owners).flat()
//5
console.log(dogs.some(dog=>dog.curFood === dog.recFood))

/*console.log(dogs.find(el => el.owners === 'Sarah' ))

console.log(dogs)*/


//SOME ???????????? ???????????? ?????? ???????? ?????????????? ?????????????? ?? ?????????? ????
//EVERY  ???????????? ???????????? ?????? ???????? ?????? ???????????????? ?????????? ??????????????
//FLAT
// const arr = [[1, 2, 3, 4], [6, 7, 9], 7, 8]
//
//
// const arrDeep = [[1, 2, 3, [0, 5], 4], [6, 7, 9], 7, 8]
//
//
// const overalBalance = accounts.map(acc => acc.movements)
//     .flat()
//     .reduce((acc, cur) =>
//         acc + cur, 0)
// console.log(overalBalance)
// ////FlatMap
// const overalBalance2 = accounts.flatMap(acc => acc.movements)
//     .reduce((acc, cur) =>
//         acc + cur, 0)
// console.log(overalBalance2)
//
// ////SORT ???????????????? ????????????
//
//
// const owner = ['Jonas', 'Zach', 'Adam']
// owner.sort()
//
// console.log(movements.sort((a, b) => a - b))
// labelBalance.addEventListener('click', function () {
//     const movementsUI =
//         Array.from(document.querySelectorAll('.movements__value'))
// })

//????????????????
//???? ????????????????
//
//
//
//
//
//
//
//
//
















