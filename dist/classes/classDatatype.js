"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDatatype = void 0;
class classDatatype {
    number(min, max) {
        if (!min || !max)
            throw new TypeError("Min and max are required!");
        if (typeof min !== "number" || typeof max !== "number")
            throw new TypeError("Min and max must be numbers!");
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    string(length) {
        if (!length)
            throw new TypeError("The length of the string is not provided!");
        if (typeof length !== "number")
            throw new TypeError("Length must be a valid number!");
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    boolean() {
        let status = Math.floor(Math.random() * 2);
        let value = false;
        status == 1 ? (value = true) : (value = false);
        return value;
    }
    // Generate a UUID
    uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
exports.classDatatype = classDatatype;
