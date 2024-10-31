const nameArray = ["C", "%", "DEL", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="];

const valueArray = ["C", "%", "DEL", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "00", 0, ".", "="];

let buttons = document.querySelector("#buttons");
let screen = document.querySelector("#screen");
let btnNames = [];
let screenString = "";
let aString, bString, operator;

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
                operator = btnNames[i].value
                let newScreenString = screenString + operator;
                screen.textContent = newScreenString;

                aString = screenString;
            });
        }
        else if ("*" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                operator = btnNames[i].value
                let newScreenString = screenString + operator;
                screen.textContent = newScreenString;

                aString = screenString;
            });
        }
        else if ("-" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                operator = btnNames[i].value
                let newScreenString = screenString + operator;
                screen.textContent = newScreenString;

                aString = screenString;
            });
        }
        else if ("+" == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                operator = btnNames[i].value
                let newScreenString = screenString + operator;
                screen.textContent = newScreenString;

                aString = screenString;
            });
        }
        else if ("." == btnNames[i].value) {
            btnNames[i].addEventListener("click", (e) => {
                if(screenString.includes(".")){
                    screenString = screenString;
                    screen.textContent = screenString;
                }
                else{
                    screenString += btnNames[i].value;
                    screen.textContent = screenString;
                }
            });
        }
    }

    //coding for the second part of operator
    {
        
    }

}