const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
      if (output.endsWith("%")) {
        output = eval(output.slice(0, -1)) / 100;
      } else {
        output = eval(output);
      }
    } else if (btnValue === "AC") {
      output = "";
    } else if (btnValue === "DEL") {
      output = output.toString().slice(0, -1);
    } else {
      if (output === "" && specialChars.includes(btnValue)) return;
      output += btnValue;
    }
    display.value = output;
  };
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});