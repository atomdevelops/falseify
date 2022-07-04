"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datatype = exports.internet = exports.person = void 0;
const classInternet_1 = require("./classes/classInternet");
const classPerson_1 = require("./classes/classPerson");
const classDatatype_1 = require("./classes/classDatatype");
exports.person = new classPerson_1.classPerson();
exports.internet = new classInternet_1.classInternet();
exports.datatype = new classDatatype_1.classDatatype();
