'use strict';


/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startIndex,mainIndex){
return [this.starterMenu[startIndex],this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/!*const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
for(const item of menu){
    console.log(item)
}
for(const [i,el]of menu.entries()){
    console.log(`${i +1}: ${el} `)
}*!/



/////chaining ?
/!*console.log(restaurant.openingHours?.fri)*!/
////// Entire object
const entries = Object.entries(openingHours)

for(const [key, {open,close}] of entries){
    console.log(`on ${key} we ${open} and close at ${close} `)
}



*/


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
/*for(let [i,player] of game.scored.entries()){
    console.log(`Goal ${i +1}: ${player}`)
}*/
/*
const odds = Object.values(game.odds)
let average = 0
for(const odd of odds){
    average+=odds
    average/=odds.length
}
*/
/*
let [players1, players2] = game.players
const [gk, ...fieldPlayers] = players1
let allPlayers = [...players1,...players2]
console.log(players1)
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final)
const {odds:{team1,x:draw,team2}} = game;
//
const printGoals = function (...players){
for (let i = 0; i< players.length;i++){
    console.log(`${players[i]} goals were scored`)
}
}
printGoals('Thiago', 'Coutinho', 'Perisic')*/
/*const orderSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Pizza', "Rissoto"])
console.log(orderSet)
for (const order of orderSet) {
    console.log(order)
}*/
// в сет ключи строки,а в мэп все что хочешь
/*const rest = new Map()
rest.set('name','Classico')
rest.set(1,'Fire')
console.log(rest)
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
}
console.log(openingHours)
const newMap = new Map(Object.entries(openingHours))
console.log(newMap)
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);
let events =[...new Set( gameEvents.values())]
console.log(events)

gameEvents.delete(64)*/


/*
const chek = (seat) => {
    let s = seat.slice(-1)
    if(s === 'B' || s === 'E'){
        console.log('middle')
    }else{
        console.log('lucky')
    }
}
chek('11B')

const chek2 = (seat) => {
    let s = seat.slice(-1)
    if(s === 'B' || s === 'E'){
        console.log('middle')
    }else{
        console.log('lucky')
    }
}
chek2('11B')
*/


/*underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure*/

//slice срез
//split разделить строку по разделителю вернет массив
//join в строку из массива
//Метод replace() возвращает новую строку с некоторыми
// или всеми сопоставлениями с шаблоном, заменёнными на заменитель
const [firstName, lastName] = 'Vika Morozova'.split(' ')
console.log(firstName);
console.log(lastName);

console.log(['MR', firstName, lastName.toUpperCase()].join())


document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));

let num = 1
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n')
    for (const row of rows) {
        const [first, second] = row.toLowerCase().trim().split('_')
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    }
})










