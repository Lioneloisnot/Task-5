let text = "Это оченьдлинноеслово и ещеоднооченьдлинноеслово";
let a = /\b\w{15,}\b/g;
let new_text = text.replace(a, "абстр…ние");

console.log(new_text);
