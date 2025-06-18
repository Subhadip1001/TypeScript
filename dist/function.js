"use strict";
function add(a, b) {
    return a + b;
}
function greet(name) {
    return `Hello, ${name}!`;
}
function isEven(num) {
    return num % 2 === 0;
}
function getLength(str) {
    return str.length;
}
const isLogin = (phoneNumber, password) => {
    const validPhoneNumber = 1234567890;
    const validPassword = "password123";
    return phoneNumber === validPhoneNumber && password === validPassword;
};
add(5, 10);
greet("Subhadip");
isEven(4);
getLength("Hello");
isLogin(1234567890, "password123");
function getValue(val) {
    if (val > 18) {
        return true;
    }
    return "You are not eligible";
}
