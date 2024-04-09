let vvod = "Тарас Карабас";
let a = /^(\S+)\s+(\S+)$/;
let b = vvod.match(a);

if (b) {
    let name = b[1];
    let surname = b[2];
    console.log(surname + " " + name);
} else {
    console.log("Ввод некорректен");
}
