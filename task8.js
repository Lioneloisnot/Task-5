let text = "домик ключик икра";
let regex = /(\b\w+)ик(?=\b)/;
let new_text = text.replace(regex, "$1");

console.log(new_text);
