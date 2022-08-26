'use strict';

/*
const bookings = []
const createBooking = (flightNum,numPassengers=1,price=100 * numPassengers)=>{
const booking = {
    price,
    flightNum,
    numPassengers
}
bookings.push(booking)
}

createBooking('LH',)*/


/*
const flight = 'LH123';
const vika = {
    name: 'Vika Mo',
    passport:12345684986
}
const chek = (flightNum,passenger) => {
flightNum = 'LH999';
passenger.name = 'Mr. ' + passenger.name
if(passenger.passport === 12345684986){
    alert('chek in')
}else{
    alert('wrong')
}
}
chek(flight,vika)


const newPassport = (person) =>{
    person.passport = Math.trunc(Math.random() * 1000000000)
}
newPassport(vika)
console.log(vika)*/

/*
const oneWord = (str) =>{
    return str.replace(/ /g, '').toLowerCase()
}
const upperFirstWord = (str) =>{
  const [first,...other] = str.split(' ')
    return [first.toUpperCase(),...other].join(' ')
}

//higher-order
const transformer = (str,fn)=>{
    return fn(str)
}
console.log(transformer('lava vika reka ',upperFirstWord))*/
/*
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}
const gree = greet('hey')
gree('vika')
gree('lala')
*/


/*const lufthanse = {
    airline: 'Lut',
    iataCode: 'LH',
    bookings: [],
    book(flightName, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightName}`
        )
        this.bookings.push({flight: `${this.iataCode} ${flightName}`, name})
    }
}

const lufthanse2 = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthanse.book
const bookEW = book.bind(lufthanse2)
book.call(lufthanse2, 23, 'lala')
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript",
        "1: Python",
        "2: Rust",
        "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n
         ${this.options.join('\n')}
        \n(Write option number)`))
        typeof answer === 'number' && answer < this.answers.length
        && this.answers[answer]++
        console.log(this.answers)
        this.displayResults()
        this.displayResults('string')
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }

};
document.querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll))
poll.displayResults.call({answers: [1,0,2]})*/

/*
(function (){
    console.log('vika')
})()*/
/////////замыкание

/*
const secur = () =>{
    let passengerCount = 0
    return function (){
        passengerCount++
        console.log(passengerCount)
    }
}

let count = secur()
let count1= secur()
count()
count()
count()
count1()
count1()
count1()*/


let f;
const g = () => {
    const a =23;
    f = () =>{
        console.log(a*2)
    }
}
const h = () => {
    const b = 777;
    f = () =>{
        console.log(b*2)
    }
}

/*h()
f()
g()
f()*/


/*const boardPassengers = (n,wait) => {
    const  perGroup = n / 3
    setTimeout(()=>{
        console.log(`Timmer ${n}`)
    },wait * 1000)
    console.log(`Will start ${wait}`)
}

boardPassengers(10,4)*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click',function (){

        header.style.color = 'blue';
    })

})();












































