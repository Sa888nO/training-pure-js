let user = {
  name: "Alex",
  surname: "Egorushkin",
  age: "21",
  job: undefined,
  pet: {
    type: "dog",
    color: "black",
  },
  loves_numbers: [1, 3, 5],
};

let years = [2020, 2021, 2022, undefined];

// преобразование js obj в json (например для передачи в тело запроса)
// !!! пропускает undefined в объектах, в массивах undefined -> null !!!
let userJSON = JSON.stringify(user);
let yearsJSON = JSON.stringify(years);
console.log(yearsJSON);
console.log(userJSON);
// считывая json строку получаем "object Object"?
// делаем их частями объекта {user, dog} / по отдельности ('user=', user)
