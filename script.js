function getHistory() {
  document.getElementById(history - value).innerText;
}

function printHistory(num) {
  document.getElementById(history - value).innerText = num;
}

function getOutput() {
  return document.getElementById(output - value).innerText;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById(output - value).innerText;
  } else {
    document.getElementById("output-value").innerText=getFormatedNumber(num);
  }
}

function getFormatedNumber(num) {
  if (nuum == "-") {
    return "";
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/, /g, ''));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "CE") {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      } else {
        let output = getOutput();
        let history = getHistory();
        if (output = "" && history == "") {
          if (isNaN(history[history.length - 1])){
            history = history.substr(0, history.length - 1);
          };
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        }
        
      }
    
let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
    number[i] = addEventListener('click' , function())
  let ouput = reverseNumberFormat(getOutput());
  if (number != NaN) {
    output = output + this.id;
    printOutput(output);
  }
  else{
        history = history+this.id;
        printHistory(history);
        printOutput("")
        }
}
