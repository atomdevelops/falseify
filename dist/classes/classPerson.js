"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classPerson = void 0;
const name_en_1 = require("../constants/name-en");
class classPerson {
    email(domain = "gmail.com") {
        let name1 = name_en_1.NAME_EN[Math.floor(Math.random() * name_en_1.NAME_EN.length)];
        let name2 = name_en_1.NAME_EN[Math.floor(Math.random() * name_en_1.NAME_EN.length)];
        let number = Math.floor(Math.random() * 100);
        return `${name1}${name2}${number}@${domain}`;
    }
    fullName() {
        let name1 = name_en_1.NAME_EN[Math.floor(Math.random() * name_en_1.NAME_EN.length)];
        let name2 = name_en_1.NAME_EN[Math.floor(Math.random() * name_en_1.NAME_EN.length)];
        return `${name1} ${name2}`;
    }
    ip() {
        return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    }
}
exports.classPerson = classPerson;
