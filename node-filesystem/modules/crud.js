var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var fs = require('fs');
var uuid = require("uuid").v4;
var getFileData = function () {
    var fileData = fs.readFileSync('./files/input.txt', { encoding: 'utf-8' });
    fileData = JSON.parse(fileData);
    return fileData;
};
var add = function (data) {
    var id = uuid();
    var newUser = __assign({ id: id }, data);
    var fileData = getFileData();
    fileData.users.push(newUser);
    fs.writeFileSync('./files/input.txt', JSON.stringify(fileData));
};
var remove = function (id) {
    var fileData = getFileData();
    var isValid = fileData.users.find(function (item) { return item.id === id; });
    console.log(isValid);
    if (isValid) {
        var newArray = fileData.users.filter(function (item) { return item.id !== id; });
        fileData.users = newArray;
        fs.writeFileSync("./files/input.txt", JSON.stringify(fileData));
    }
};
var update = function (id, data) {
    var fileData = getFileData();
    var isValid = fileData.users.find(function (item) { return item.id === id; });
    if (isValid) {
        var ind = fileData.users.indexOf(isValid);
        if (data.name) {
            fileData.users[ind].name = data.name;
        }
        if (data.age) {
            fileData.users[ind].age = data.age;
        }
        fs.writeFileSync("./files/input.txt", JSON.stringify(fileData));
    }
};
var getAllUsers = function () {
    var fileData = getFileData();
    console.log(fileData.users);
};
module.exports = { getFileData: getFileData, add: add, remove: remove, update: update, getAllUsers: getAllUsers };
