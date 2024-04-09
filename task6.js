let tel = "89001234567";

let regex = /^(\+7|8)(\s)?(\()?900(\))?(\s|-)?123(\s|-)?45(\s|-)?67$/;
let tel2 = tel.match(regex);

if (tel2) {
    console.log("Номер телефона валиден");
} else {
    console.log("Номер телефона невалиден");
}