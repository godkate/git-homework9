//Вивести всі числа в діапазоні від 100 до 200 кратні 3

console.log('start task8')
let eighthNum = 100;
for (; eighthNum <= 200; eighthNum += 1) {
    if (eighthNum % 3 === 0) {
        console.log(eighthNum);
    }
}
console.log('end task8')
