// Comment here
console.log("Hellllo World");
let name = "Max";
console.log(name);

let userName = {
    name : 'Bla',
    age : 30
};

console.log(userName.age);
console.log(userName.name);
console.log(name);
console.log(typeof(name));

let selectedColors = ['red', 'green', 'blue'];
console.log(selectedColors[2], typeof(selectedColors));
console.log(selectedColors.length);

function greet(name, lastName) {
    return ('Hello ' + name + ' ' + lastName);
}

function calculation (val) {
    return val * val;
}

 console.log(greet('Max', 'Nadzon'));
greet('Toleg', 'Buyg');
console.log(calculation(100),', ', greet('Bla', 'Yo'));

let x = 10;
let y = 2;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// console.log(x++);
// console.log(++x);
// console.log('Test', x);
// console.log(--x);
// console.log(x--);
// console.log(x);

let points = 90;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

let goodSal = true;
let credHist = false;

let loan = goodSal || credHist;
console.log(loan);

let statusApp = !loan;
console.log(statusApp);

let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if (hour >= 12 && hour <= 18)
    console.log('Good Afternoon!');
else
    console.log('Good everning!');

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    
    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User')    
}

for (let i = 0; i <= 5; i++) {
    console.log('Iteration N' + ' ' + i );
    if (i % 2 !== 0) console.log(i);
}
console.log('==================')
let i = 5;

while (i >= 0) {
    console.log(i);
    i--;
}
console.log('-------------')
let z = 101;
do {
    if (z % 2 !== 0) console.log(z)
    z++;
} while (z <= 10);

const person = {
    name : 'Max',
    age : 35,
    sex : 'M'
}

const test = ['red', 'blue', 234]

for (let key in person) {
    console.log(key,':', person[key]);
}

for (let key in test) console.log(key, test[key]);
for (let key of test) console.log(key);