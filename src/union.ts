let score: number | string;

score = 44;
score = "55";

type Emplyee ={
    name: string;
    id: number | string;
}

type Admin = {
    userName: string;
    id: number | string;
}

let Subhadip: Emplyee | Admin = {name: "Subhadip", id: 44};

Subhadip = {userName: "Mandal", id: "44"};

function getDbId(id: number | string) {
    // do something
    console.log(`DB id is: ${id}`);
}

// In Array
// It is only allowed numbers or strings not both in a single array
const data: number[] | string[] = [1, 2, 3,];
// It is allowed both numbers and strings in a single array
const data2: (number | string)[] = [1, 2, "3", "4"];