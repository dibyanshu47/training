"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('./modules/crud'), getAllUsers = _a.getAllUsers, add = _a.add, remove = _a.remove, update = _a.update, getFileData = _a.getFileData;
// const data = fs.readFileSync('./files/input.txt', {encoding: 'utf-8'})
// console.log(JSON.parse(data))
// add({id: Date.now(),name:'sanjay', age:20})
// remove(1695195844658)
// update(1695196136390, {age:18})
getAllUsers();
