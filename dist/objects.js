"use strict";
const user = {
    name: "Subhadip Mnadal",
    age: 22,
    isStudent: true,
    hobbies: ["coding", "reading", "gaming"]
};
function getUserInfo(user) {
    return `Name: ${user.name}, Age: ${user.age}, Student: ${user.isStudent}, Hobbies: ${user.hobbies.join(", ")}`;
}
getUserInfo(user);
