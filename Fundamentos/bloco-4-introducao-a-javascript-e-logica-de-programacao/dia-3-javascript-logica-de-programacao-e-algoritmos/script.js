let factorial = 1

for (let i = 1; i < 11; i += 1) {
    factorial *= i;
}
console.log('Fatorial de 10', factorial);

let word = 'tryber';
console.log(word.split('').reverse().join(''));