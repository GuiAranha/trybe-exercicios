let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let max = 0;
let min = 999999999999999;
let odd = [];
let array = [];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
    //somatoria
    sum += numbers[i];
    //maior valor
    if (numbers[i] > max) {
        max = numbers[i];
    }
    //valores impares
    if (numbers[i] % 2 !== 0) {
        odd.push(numbers[i]);
    }
    //menor valor
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

let media = (sum / numbers.length);
if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

if (odd.length > 0) {
    console.log('quantidade de impares:', odd.length);
} else {
    console.log('nenhum valor ímpar encontrado');
}
console.log('Soma:', sum, 'Media:', media, 'Maior valor:', max, 'Menor valor:', min);

for (let i = 0; i < 25; i += 1) {
    array.push((i + 1));
}

console.log(array);