console.log('Functions');

function calculation (a, b) {
    if (a > b) console.log('a', 'is bigger');
    else if (a < b) console.log('b', 'is bigger');
    else console.log(a + ' equal to ' + b);
}

calculation(4, 7);
calculation(4, 3);
calculation(3, 3);
calculation(-3, 3);

console.log(calculation_2(4, 7));
console.log(calculation_2(4, 3));
console.log(calculation_2(3, 3));
console.log(calculation_2(-3, 3));
console.log(calculation_3(300, 3));
console.log(calculation_3(300, 3000));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(12));
console.log(fizzBuzz(7));
console.log(fizzBuzz('test'));
console.log(fizzBuzz(false));



function calculation_2(a, b){
    return (a > b) ? a : b;
}
function calculation_3(width, height){
    return (width > height) ;
}

function fizzBuzz(input) {
    if (typeof input === "number"){
        if (input % 3 === 0 && input % 5 === 0) return 'fizzBuzz';
        else if (input % 5 === 0) return 'buzz';
        else if (input % 3 === 0 ) return 'fizz';
        return input;
    }
    else return NaN;
     
}


console.log(speedcheck(70));
console.log(speedcheck(135));
console.log(speedcheck(72));
console.log(speedcheck(73));
console.log(speedcheck(74));
console.log(speedcheck(75));
console.log(speedcheck(76));
console.log(speedcheck(79));
console.log(speedcheck(80));

function speedcheck (speed) {
    const speedLimit = 70;
    const speedStep = 5;

    if (speed < speedLimit + speedStep) return 'Ok';
    else {
        let currentValue = Math.floor((speed - 70) / 5);
        return (currentValue <= 12) ? currentValue : 'License suspended';
    } 
}

even_odd(10);

function even_odd(limit) {
    for (let i = 0; i <= limit; i++) {
        const valueType = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, valueType);
    }
}


array = [1, 2, 4, 5, 3, '', 0, undefined, NaN]
console.log(countTruthy(array));

function countTruthy (array) {
    let a = 0;
    for (let i of array){
        console.log(i);
        if (i) a+=1; 
    }
    return a;
}

const diction = {title: 'a', release: 2015, rating: 4.5, director: 'b'};

showPropertis(diction);

function showPropertis(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'string'){
            console.log(key, obj[key]);
        }
    }
}

showStars(5)
function showStars(val) {
    const test = '*';
    for (let i = 1; i <= val; i++)
        console.log(test.repeat(i));
}

console.log('-----------------')
showPrime(3);
function showPrime(value) {
    for (let number = 2; number <= value; number++){
        isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0){
                console.log(number, factor)
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}

// Factory Functions
function createCircle(radius) {
    return {radius,
    draw() {
        console.log('Draw', radius);
    }
    };
}

const circle_1 = createCircle(3);
const circle_2 = createCircle(5);

console.log(circle_1);
console.log(circle_2);

circle_1.draw();

// Constructor Functions
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle_3 = new Circle(5);
circle_3.draw();
console.log('======')
const circle_4 = {radius : 1, draw() {console.log('test')}, test : 3};
for (let key in circle_4) console.log(key, circle_4[key]);
for (let key of Object.keys(circle_4)) console.log(key);
for (let entry of Object.entries(circle_4)) console.log(entry);
if ('radius' in circle_4) console.log('Yo');

const another = {...circle_4};
console.log(another.draw());

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address2;



function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address2, address3));

// Blog Post object
let post = {
    title : 'a',
    body : 'b',
    author : 'c',
    views : 10,
    comments : [{author : 'a', body : 'b'},
{author : 'b', body : 'c'}],
    isLive : true
}

console.log(post);

let post_2 = new Post('New', 'Hello', 'Max');

console.log(post_2);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let priceRanges = [
    {label : '$', tooltip : 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    {label : '$$', tooltip : 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    {label : '$$$', tooltip : 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

let rest = [{averagePerPerson: 5}];

// Arrays

const numbers = [3, 4];
numbers.push(5, 6, 1);
numbers.unshift(1, 2);
numbers.splice(2, 0, 'a', 'b');
numbers.splice(2, 1, 'y');

console.log(numbers, typeof numbers);
console.log(numbers.indexOf('y'));
console.log(numbers.indexOf(1, 4));
console.log(numbers.includes('y'));
console.log(numbers.lastIndexOf(1));

const tets_1 = array.findIndex(function (element) {
    return element === 3;
})
const tets_2 = priceRanges.find(function (element) {
    return element.label;
})
const tets_3 = priceRanges.find(element => element.label);



console.log(array);
console.log(tets_1);
console.log(tets_2);
console.log(tets_3);
array.pop()
array.shift()
array.splice(2, 1)
array.length = 0;
console.log(array);

const first = [1, 2, 3];
const second = [4, 5, 6];
const third = first.concat(second);
const four = [...first, ...second, ...third];
console.log(third);
console.log(four);

function arrayFromRange(min, max) {
    let array_3 = [];
    for (i = min; i <= max; i++) {
        array_3.push(i);
    }
    return array_3;
}
console.log(arrayFromRange(-20, -18));

function includes(array, searchElement) {
    for (let i of array){
        console.log(i);
        if (i === searchElement) return true;
    else return false;
    } 
}
console.log(includes([1, 3, 4], 6))

const numberss = [1, 2, 3, 4]

function excerpt(array_to_go, val_to_del) {
    const return_value = [];
    for(let i of array_to_go) if(!val_to_del.includes(i)) return_value.push(i);
    return return_value;
}
const yo = excerpt(numberss, [1, 2, 6, 7])
console.log(yo);

function move_elem(array_to_go, index, offset) {
    const new_pos = index + offset
    if (new_pos >= array_to_go.length || new_pos < 0 || index >= array_to_go.length){
        console.error('Invalid Offset.')
        return;
    }
    const output = [...array_to_go]
    const one_item = output.splice(index, 1)[0]
    output.splice(new_pos, 0, one_item)
    return output

}
const test_8 = move_elem(numberss, 3, -2);
console.log('------');
console.log(test_8);

console.log(Math.max(...numberss));
// console.log(numberss.reduce(function(a, b){ return Math.max(a, b)}));
console.log(numberss.reduce((a, b) => a > b ? a : b));

let yo_1 = arrayFromRange;
console.log(yo_1(4, 8));

function summ() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

function summm( discount = 0.1, ...prices) {
    const test = prices.reduce((a, b) => a + b);
    return test * (1 - discount);
}

console.log(summ(1,2,3,6, 100));
console.log(summm(undefined, 1,2,3,6, 100));

const person = {
    firstName : 'Max',
    lastName : 'Test',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//person.fullName = 'John Smith';
console.log(person);


const color = 'red';

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
    {
        var test = 5;
        let test1 = 10;
    }
    console.log(test);
    console.log(this)
}

start();
console.log(color);

function sunm(...values) {
    if (values.length === 1 && Array.isArray(values[0]))
        values = [...values[0]]
    return values.reduce((a, b) => a + b);
}

console.log(sunm([1, 3, 4, 5, 100]));

