let task1 = "";
let firstNumber = 10
for (; firstNumber <= 20; firstNumber += 1) {
    task1 += `${firstNumber}, `;
}

document.getElementById("task1").innerHTML = task1;

