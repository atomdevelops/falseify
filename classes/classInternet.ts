import { NAME_EN } from "../constants/name-en";

export class classInternet {
  ip() {
    return `${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  }

  username() {
    let name1 = NAME_EN[Math.floor(Math.random() * NAME_EN.length)];
    let name2 = NAME_EN[Math.floor(Math.random() * NAME_EN.length)];

    let number = Math.floor(Math.random() * 100);

    return `${name1}${name2}${number}`;
  }
}
