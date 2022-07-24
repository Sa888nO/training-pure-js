ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);

let ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};
