const a = 6;
const b = 3;
const c = 10;
const num = -10;

console.log('Adicao', (a + b));
console.log('Subtracao', (a - b));
console.log('Multiplicacao', (a * b));
console.log('Divisao', (a / b));

if (a > b && a > c) {
    console.log('Maior numero:', a);
} else if (b > a && b > c) {
    console.log('Maior numero:', b);
} else if (c > a && c > b) {
    console.log('Maior numero:', c);
}

if (num > 0) {
    console.log('positive');
} else if (num < 0){
    console.log('negative');
} else {
    console.log('zero');
}