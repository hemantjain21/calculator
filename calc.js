const nameArray = ["C", "%", "DEL", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="];

const valueArray = ["C", "%", "DEL", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "00", 0, ".", "="];


let resultScreen = document.querySelector("#resultScreen");
let buttons = document.querySelector("#buttons");
let screen = document.querySelector("#screen");
let btnNames = [];
let screenString = "";
let aString, bString, operatorPosition, operator, newScreenString, previousString, bStartingPosition;
let finalExpressionArray = [];
let operatorArray = [];
let splitArray = [];
let newArray = [];
let newArrayNumber = [];
let operatorArrayNumber = [];
let num;
let result = 0;
let number;
let newArr = [];

for (let i = 0; i <= 19; i++) {
    btnNames[i] = document.createElement("button");
    btnNames[i].textContent = nameArray[i];
    btnNames[i].value = valueArray[i];
    buttons.appendChild(btnNames[i]);
    btnNames[i].className = "btn";

    {
        if (("00123456789").includes(btnNames[i].value)) {
            btnNames[i].addEventListener("click", (e) => {
                screenString += btnNames[i].value;
                screen.textContent = screenString;
            });
        }
        else if ("C" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                screenString = "";
                screen.textContent = screenString;
            });
        }
        else if ("DEL" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                let reducedString = Array.from(screenString);
                reducedString.pop();
                screenString = reducedString.join("");
                screen.textContent = screenString;
            });
        }
        else if ("%" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                let percent = (+screenString) / 100;
                screenString = percent;
                screen.textContent = screenString;
            });
        }
        else if ("/" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                operator = btnNames[i].value;
                newScreenString = screenString + operator;
                screenString = newScreenString;
                screen.textContent = screenString;

                operatorArray.push("/");
            });
        }
        else if ("*" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                operator = btnNames[i].value
                newScreenString = screenString + operator;
                screenString = newScreenString;
                screen.textContent = screenString;

                operatorArray.push("*");
            });
        }
        else if ("-" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                operator = btnNames[i].value
                newScreenString = screenString + operator;
                screenString = newScreenString;
                screen.textContent = screenString;

                operatorArray.push("-");
            });
        }
        else if ("+" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                operator = btnNames[i].value
                newScreenString = screenString + operator;
                screenString = newScreenString;
                screen.textContent = screenString;

                operatorArray.push("+");
            });
        }
        else if ("." == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                if (screenString.includes(".")) {
                    screenString = screenString;
                    screen.textContent = screenString;
                }
                else {
                    screenString += btnNames[i].value;
                    screen.textContent = screenString;
                }
            });
        }
        else if ("=" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                if ((screenString.at(-1)) == operator) {
                    screenString = screenString.slice(0, -1);
                    operatorArray.pop();
                    // screen.textContent = screenString;
                    // resultScreen.textContent = screenString;
                }
                else {
                    // code here
                    finalExpressionArray = screenString;
                    for (let i = 0; i <= operatorArray.length; i++) {
                        splitArray = finalExpressionArray.split(operatorArray[i]);
                        num = splitArray.shift();
                        newArray.push(num);
                        finalExpressionArray = splitArray.toString();
                        // finalExpressionArray = splitArray;
                    }

                    newArrayNumber = newArray.map((a) => {
                        return a = +a;
                    });

                    let a = operatorArray.length;

                    for (let i = 0; i < a; i++) {

                            if ("/" == operatorArray[0]) {
                                result = (newArrayNumber[0] / newArrayNumber[1]);
                                newArrayNumber.shift();
                                newArrayNumber.shift();
                                newArrayNumber.unshift(result);
                                operatorArray.shift();
                            }

                            else if ("*" == operatorArray[0]) {
                                result = (newArrayNumber[0] * newArrayNumber[1]);
                                newArrayNumber.shift();
                                newArrayNumber.shift();
                                newArrayNumber.unshift(result);
                                operatorArray.shift();
                            }

                            else if ("+" == operatorArray[0]) {
                                result = (newArrayNumber[0] + newArrayNumber[1]);
                                newArrayNumber.shift();
                                newArrayNumber.shift();
                                newArrayNumber.unshift(result);
                                operatorArray.shift();
                            }

                            else if ("-" == operatorArray[0]) {
                                result = (newArrayNumber[0] - newArrayNumber[1]);
                                newArrayNumber.shift();
                                newArrayNumber.shift();
                                newArrayNumber.unshift(result);
                                operatorArray.shift();
                            }

                        
                    }
                }
            });
        }
    }



}