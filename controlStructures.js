// for(...){} standart

// switch(exp) {case 0: ... break; ...; default: ...} standart

// for of - for (let/const item of items)
// можно перебрать строку по 1 символу юникода

// for in - for (let/const ket in object)
// перебирает ключи в объекте, так же может пер-ть им-а свойст массива

// выход из цикла(ов) через break - метка для выхода сразу из 2х блоков
// let i = 0;
// let j = 0;
// outer: while (i < arr.length) {
//   while (j < arr[i].length) {
//     if (arr[i][j] < 0) break outer;
//     j++;
//   }
//   i++;
//   j = 0;
// }

// continue - сразу переходит в начало цикла (пропуская даль-е действия)

// try{...} catch {...} standart

try {
  String([1, fr]);
} catch {
  console.log("error");
}
