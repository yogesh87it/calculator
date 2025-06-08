const num = document.querySelectorAll(".num");
const opr = document.querySelectorAll(".opr");
const equal = document.querySelector(".equal");
const display = document.getElementById("app");
const sqRt = document.querySelector(".sqRt");
const cancel = document.querySelector(".cancel");
const power = document.querySelector(".on-off");
let isON = true;

display.textContent = 0;
let firstNum = "";
let secondNum = "";
let operand = "";
let equalsTo = "";

function mathOperation() {
  let conFirstNum = +firstNum;
  let conSecondNum = +secondNum;

  switch (operand) {
    case "*":
      return conFirstNum * conSecondNum;
    case "/":
      return conFirstNum / conSecondNum;
    case "+":
      return conFirstNum + conSecondNum;
    case "-":
      return conFirstNum - conSecondNum;
    case "**":
      return conFirstNum ** conSecondNum;

    default:
      return "";
  }
}

num.forEach((value) =>
  value.addEventListener("click", () => {
    let addingNum = value.textContent;
    if (operand === "") {
      firstNum += addingNum;
      display.textContent = firstNum;
    } else {
      secondNum += addingNum;
      display.textContent = secondNum;
    }
  })
);

opr.forEach((value) =>
  value.addEventListener("click", () => {
    let displayOpr = value.textContent;
    operand += displayOpr;
    display.textContent = displayOpr;
  })
);

equal.addEventListener("click", () => {
  if (equalsTo === "") {
    let answer = mathOperation().toFixed(6);
    //below if else needed else it will display 6 decimals even for integers
    if (answer % 1 === 0) {
      display.textContent = Math.trunc(answer);
    } else {
      display.textContent = answer;
    }
    firstNum = answer;
    secondNum = ""; //else number will be firstdigit
    operand = "";
    equalsTo = "=";
  } else {
    display.textContent = firstNum;
    //firstNum = "";
    secondNum = "";
    operand = "";
    equalsTo = "=";
  }
});

sqRt.addEventListener("click", () => {
  let root =
    firstNum !== "" ? Number(firstNum) ** 0.5 : Number(secondNum) ** 0.5;
  display.textContent = root;
  firstNum = root;
});

cancel.addEventListener("click", () => {
  display.textContent = 0;
  firstNum = "";
  secondNum = "";
  operand = "";
  equalsTo = "";
});

// set max digits
//set max decimals

power.addEventListener("click", () => {
  if (isON) {
    display.style.backgroundColor = " #30312c";
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    operand = "";
    equalsTo = "";
    isON = false;
  } else {
    display.style.backgroundColor = "#c0e668c9";
    display.textContent = 0;
    isON = true;
  }
});
