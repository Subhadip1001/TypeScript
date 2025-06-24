const user = {
    name: "Subhadip Mnadal",
    age: 22,
    isStudent: true,
    hobbies: ["coding", "reading", "gaming"]
}

function getUserInfo(user: { name: string; age: number; isStudent: boolean; hobbies: string[] }) {
    return `Name: ${user.name}, Age: ${user.age}, Student: ${user.isStudent}, Hobbies: ${user.hobbies.join(", ")}`;
}

getUserInfo(user);

function createCourse():{courseName: string; duration: number} {
    return { courseName: "TypeScript Basics", duration: 30 };
}