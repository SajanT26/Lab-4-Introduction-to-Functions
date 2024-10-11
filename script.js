function greet(name) {
    return 'How are you, {Sajan}'
}
console.log(greet("Sajan"));

function addNumbers(num1, num2) {
    return num1 + num2
}
let result = addNumbers(2,9)
console.log(result);

let x =10;
console.log(x)
function changeValue() {
    let x = 5;
    console.log("inside", x);
}
changeValue();
console.log("redeclare", x);

function outerfunction() {
    let count = 0
    return function increment() {
        count++
        console.log(count);
}
}
const incrementCount = outerfunction();
incrementCount();
incrementCount();
incrementCount();