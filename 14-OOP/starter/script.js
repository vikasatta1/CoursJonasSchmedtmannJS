'use strict';
//функция конструктор
//expression тут не будет работать из-за this
//  const Person = function (name, birthYear) {
//     this.name = name
//     this.birthYear = birthYear
//        //так не делать потому что будет создаваться копия этой функции
//     /*this.calcAge = function (){
// //     console.log(2037 - this.birthYear)
// // }*/
//  }
// const Jonas = new Person('Jonas', 1998)
// Person.hey = function (){
//     console.log(`hey there`)
// }
// Person.hey()
// Jonas.hey()
// //создается пустой объект
// //ф-ция вызывается, this = {} - указывает на новый объект
// //{} ссылка на прототип
// //ф-ция автоматически возвращает {}
// //Prototype
// //прототипное наследование
//  Person.prototype.calcAge =function (){
//   console.log(2037 - this.birthYear)
//  }
//  Jonas.calcAge()
//  console.log(Jonas.__proto__)
// // /*{calcAge: ƒ, constructor: ƒ}
// // calcAge: ƒ ()
// // constructor: ƒ (name, birthYear)
// //     [[Prototype]]: Object*/
//  console.log(Jonas.__proto__ === Person.prototype)//true
// console.log( Person.prototype.isPrototypeOf(Jonas))//true
// console.log( Person.prototype.isPrototypeOf(Person))//false
// //
// // //.prototypeOfLinkedObjects
// //
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

/*console.log(Jonas.__proto__)*/
/*species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
calcAge: ƒ ()
species: "Homo Sapiens"
constructor: ƒ (name, birthYear)
    length: 2
    name: "Person"
prototype: {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}*/

//prototype chain

/*console.log(Jonas.__proto__.__proto__)*/
/*{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()*/

/*console.log(Jonas.__proto__.__proto__.__proto__)//null
const arr = [1,3,4,5,6]
console.log(arr.__proto__)*/

/*    [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object*/


///////////////////////// создание класса через функцию конструктор
/*
const Car = function (make,speed){
    this.make = make
    this.speed = speed
}
Car.prototype.accelerate = function (){
    this.speed += 10
    console.log(`${this.speed} km/h`)
}
Car.prototype.brake = function(){
    this.speed -= 5
    console.log(`${this.speed} km/h`)
}
const bmw = new Car('BMW',120)
const mercedes = new Car('Mercedes',95)
console.log(bmw)
bmw.accelerate()*/

////////////////////////////////////CLAAAAAAAAAASS синтаксический сахар
// class Person {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName
//         this.birthYear = birthYear
//     }
//
// //все методы будут в прототипах объектов, а не в самом объекте
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     }
//
//     greet() {
//         console.log(`Hey ${this.fullName}`)
//     }
//
//     get age() {
//         return 2037 - this.birthYear
//     }
//
//     set fullName(name) {
//         if (name.includes(' ')) {
//             this._fullName = name
//         } else {
//             alert(`${name} is not a full name!`)
//         }
//     }
//
//     get fullName() {
//         return this._fullName
//     }
//
//     static hey() {
//         console.log('Hey there')
//         console.log(this)
//     }
//
// }
//
// const jessica = new Person("Jessica Davis", 1999,'cd')
// Person.hey()


//классы не всплывают
//можем передать класс в ф-цию и вернуть из ф0ции
//тело класса выполняется в строгом  режиме


////////////////////////////////ГЕТТЕРЫ И СЕТТЕРЫ
//функции которые получают и устанавливают значение

/*const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop()
    },
    set latest(mov) {
        this.movements.push(mov)
    }
}
console.log(account.latest)//300
account.latest = 50
console.log(account)*/

//////////////////////static method ПРИКРЕПЛЕН К СВОЕМУ КОНСТРУКТОРУ
/////////////////////ПРОТОТИМ НЕ МОЖЕТ ЕГО ИСПОЛЬЗОВАТЬ


/*
class Car {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5
        console.log(`${this.speed} km/h`)
    }

    get speedUS() {
       return  this.speed / 1.6
    }

    set speedUS(mil) {
      this.speed = mil * 1.6
    }

}
*/


////////////////Object.create() вручную установить прототип для объекта

/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },
    init(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }
}

const steven = Object.create(PersonProto)
steven.name = 'Steven'
steven.birthYear = 2002
steven.calcAge()
console.log(steven.__proto__ === PersonProto)//true

const sarah = Object.create(PersonProto)
sarah.init('Sarah',1979)
sarah.calcAge()
*/


const Person = function (firstName, birthYear) {
  this.firstName = firstName
    this.birthYear = birthYear
 }
  Person.prototype.calcAge =function (){
   console.log(2037 - this.birthYear)
  }

  const Student = function (firstName,birthYear,course){
    Person.call(this,firstName,birthYear)
      this.course = course
  }
//без этого калк не вызовется
  Student.prototype = Object.create(Person.prototype)


  Student.prototype.introduce = function (){
      console.log(`My name is ${this.firstName} and I study ${this.course}`)
  }

  const mike = new Student("Mike", 2020, 'Comp')
mike.introduce()
mike.calcAge()

Student.prototype = Object.create(Person.prototype)


Student.prototype.introduce = function (){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student("Mike", 2020, 'Comp')
mike.introduce()
mike.calcAge()









