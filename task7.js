//Вивести суму лише парних чисел в діапазоні від 30 до 80

console.log('start task7')

let seventhNum = 30;
let sumOfEvenNumbers = 0;
for (; seventhNum <= 80; seventhNum += 1) {
    if (!(seventhNum % 2)) {
        sumOfEvenNumbers += seventhNum;
    }
}
console.log(sumOfEvenNumbers)
console.log('end task7')
