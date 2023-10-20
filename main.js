let currentValue = "";
let previousValue = "";
let operator = "";

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let decimal = document.querySelector(".decimal");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

let previous = document.querySelector(".previous");
let current = document.querySelector(".current");

numbers.forEach((number) => {
    number.addEventListener("click", function (e) {
        if (currentValue.length < 9) {
            currentValue += e.target.textContent;
            current.textContent = currentValue;
        }
    });
}
);

operators.forEach((op) => {
    op.addEventListener("click", function (e) {
        operator = e.target.textContent;
        previousValue = currentValue;
        previous.textContent = previousValue + "" + operator;
        currentValue = "";
        current.textContent = currentValue;
        current;

    })
});

clear.addEventListener("click", function () {
    currentValue = "";
    previousValue = "";
    operator = "";
    current.textContent = currentValue;
    previous.textContent = previousValue;
})

equal.addEventListener("click", function () {
    if (currentValue != '' && previousValue != '') {
        calculate();
        if (previousValue.length < 9) {
            previous.textContent = "";
            current.textContent = previousValue;
        }
        else{
            previousValue = previousValue.slice(0,8);
            current.textContent = previousValue + "...";
        }
    }
});

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    }
    else if (operator === "-") {
        previousValue -= currentValue;
    }
    else if (operator === "x") {
        previousValue *= currentValue;
    }
    else {
        previousValue /= currentValue;
    }

    previousValue = roundNum(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNum(num) {
    return Math.round(num * 1000) / 1000;
}

decimal.addEventListener("click", ()=>{
    if(!currentValue.includes(".")){
        currentValue += ".";
    }
});