//Дано натуральне число. Знайти та вивести на сторінку всі його дільники

console.log('start task9');
let naturalNumber = 8;
let iterationNum = 0;
let sumIterationNumbers = 0;
for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        console.log(i);
        //Визначити кількість його парних дільників
        if (i % 2 === 0) {
            iterationNum++;
            //Знайти суму його парних дільників
            sumIterationNumbers += i;
        }
    }
}
console.log(`Кількість парних дільників: ${iterationNum}`)
console.log(`Сума парних дільників: ${sumIterationNumbers}`)
console.log('end task9');
