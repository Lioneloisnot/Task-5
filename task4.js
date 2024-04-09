let vvod = "12";

let a = /^(\d+).,$/;
let b = vvod.match(a);

if (b) {
    let celoe = b[1];
    let drob = b[2];
    console.log("Целая часть: " + celoe);
    console.log("Дробная часть: " + drob);
} else {
    console.log("Ввод не является десятичной дробью или целым числом");
}
