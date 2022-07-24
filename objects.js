/* Это БАЗА */

// получение данных 1) obj.key 2) obj[""]
// для сложных ключей использовать [key + "key "] : value
// если key - это параметр ф-ии созд-ий объект можно просто написать {key} вместо {key : value} :
function makeUser(name, age) {
  return {
    name,
    age,
  };
}
// delete obj.key удаление свойства
// "key" in obj проверит есть ли ключ в объекте
// for (*let* key in obj) перебор ключей массива

/* Клонирование */

// 1) перебор пример:
let user = {
  name: "Иван",
};
let clone = {};
for (let key in user) {
  clone[key] = user[key];
}
// теперь в переменной clone находится абсолютно независимый клон объекта

// 2) через Object.assign пример:
// Object.assign(клон - целевой массив, [src1, src2, src3...] - объекты, которые клонируем)
// let clone = Object.assign({}, user); можно и так запишет в пустой массив и вернет

// 3) если объект с вложенностью используем глубокое клонирование ф-я _.cloneDeep(value) из lodash

/* Методы объекта и this */
// сокращённая запись метода объекта:
user = {
  name: "Van",
  sayName() {
    console.log(this.name);
  },
};
user.sayName(); // вызов
// this – это объект «перед точкой», который использовался для вызова метода.

// В функциях стрелках нет this

// пример сохранения переменных и работа с ними в объектах используя this
let calculator = {
  read: function () {
    this.num1 = +prompt("num1");
    this.num2 = +prompt("num2");
  },
  sum: function () {
    return this.num1 + this.num2;
  },
  mul: function () {
    return this.num1 * this.num2;
  },
};

// для использования методов в строчку добавляем возврат самого объекта
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
};
console.log(ladder.up().up().up().step);

/* Объекты конструкторы */
// Имя конструктора с большой буквы User - пример
// вызов через new - создаёт пустой this в начале выполнения и возвращает заполненный в конце.
function User(name) {
  this.name = name;
  this.sayHi = function () {
    alert("Меня зовут: " + this.name);
  };
}
let firstUser = new User("Саша");
