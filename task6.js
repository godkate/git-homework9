//Знайти середнє арифметичне всіх цілих чисел від 1 до 500

console.log('start task6');
let sixthNum = 1;
let sumAll = 0;
let result = "";
for (; sixthNum <=500; sixthNum += 1) {
    sumAll += sixthNum;
    result = `average: ${sumAll/500}`;
}
console.log(result)
console.log('end task6');
