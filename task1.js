//const d = document.createElement('div');
let str = "";
let firstNumber = 10
for (; firstNumber <= 20; firstNumber += 1) {
    str += `${firstNumber}, `;

    //const elem = document.createElement('div');
    //elem.innerText = `result: ${str}`;
    //d.append(elem);

}
console.log(str);
document.getElementById("str").innerHTML = str;
//document.documentElement.append(d);
