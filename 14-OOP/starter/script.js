'use strict';
//функция конструктор
//expression тут не будет работать из-за this
const Person = function (name, birthYear) {
    this.name = name
    this.birthYear = birthYear


        //так не делать потому что будет создаваться копия этой функции
    /*this.calcAge = function (){
    console.log(2037 - this.birthYear)
}*/
}


const Jonas = new Person('Jonas', 1998)

//создается пустой объект
//ф-ция вызывается, this = {} - указывает на новый объект
//{} ссылка на прототип
//ф-ция автоматически возвращает {}


//Prototype
//прототипное наследование
// Person.prototype.calcAge =function (){
//     console.log(2037 - this.birthYear)
// }
// Jonas.calcAge()
// console.log(Jonas.__proto__)
// /*{calcAge: ƒ, constructor: ƒ}
// calcAge: ƒ ()
// constructor: ƒ (name, birthYear)
//     [[Prototype]]: Object*/
// console.log(Jonas.__proto__ === Person.prototype)//true
// console.log( Person.prototype.isPrototypeOf(Jonas))//true
// console.log( Person.prototype.isPrototypeOf(Person))//false
//
// //.prototypeOfLinkedObjects
//
// Person.prototype.species = 'Homo Sapiens'
// console.log(Jonas)
/*Person {name: 'Jonas', birthYear: 1998}
birthYear: 1998
name: "Jonas"
    __proto__:
        calcAge: ƒ ()
        species: "Homo Sapiens"
constructor: ƒ (name, birthYear)
    [[Prototype]]: Object*/
// console.log(Jonas.species)
//
// console.log(Jonas.hasOwnProperty('firstName'))//true
// console.log(Jonas.hasOwnProperty('species'))//false























/*const Car = function (make,speed){
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function (){
    this.speed += 10
    console.log(this.speed)
}
Car.prototype.brake = function(){
    this.brake -= 5
    console.log(this.speed)
}

const bmw = new Car('BMW',120)
console.log(bmw)*/
