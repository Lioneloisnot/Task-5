let list = ["Кузьмин Иван", "Петров Петр", "Федоров Иван"];
let vvod = "Кузьмин Иван";

for (let i = 0; i < list.length; i++) {
    if (list[i] === vvod) {
        list[i] = "Иванов Иван";
    }
}
console.log(list);