function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function getLength(str: string): number {
  return str.length;
}

const isLogin = (phoneNumber: number, password: string): boolean =>{
    // Simulating a login check
    const validPhoneNumber = 1234567890;
    const validPassword = "password123";
    
    return phoneNumber === validPhoneNumber && password === validPassword;
}

add(5, 10); // returns 15
greet("Subhadip"); // returns "Hello, Subhadip!"
isEven(4); // returns true
getLength("Hello"); // returns 5
isLogin(1234567890, "password123"); // returns true

function getValue(val: number){
    if(val > 18){
        return true;
    }

    return "You are not eligible";
}