//Надрукувати повну таблицю множення від 1 до 10
console.log('start task10')
let number = 0;
for (a = 1; a < 10; a++) {
    for (b = 1; b < 10; b++){
        number = a*b;
        console.log(`${a}*${b}=${number}`)
    }
}
console.log('end task10')
