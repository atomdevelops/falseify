import * as falseify from "@falseify/core";

console.log(falseify.person.fullName()); // --> Roderick Aswin
console.log(falseify.person.email()); // --> ElwynNigel18@gmail.com

// Custom email domain
console.log(falseify.person.email("hotmail.com")); // --> MordecaiClaude99@hotmail.com

console.log(falseify.datatype.boolean());
console.log(falseify.datatype.number(15, 30));
console.log(falseify.datatype.string(15));
console.log(falseify.datatype.uuid());
