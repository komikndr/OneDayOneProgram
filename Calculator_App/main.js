function calculate(b_reg, c_reg, operator) {
  let b = parseInt(b_reg.join(""), 10);
  let c = parseInt(c_reg.join(""), 10);

  switch (operator) {
    case "+":
      return b + c;
    case "-":
      return b - c;
    case "x":
      return b * c;
    case "/":
      return b / c;
    default:
      null;
  }
}

function integerToArray(number) {
  const numberString = number.toString();
  const charArray = numberString.split("");
  const digitArray = charArray.map((char) => parseInt(char, 10));
  return digitArray;
}

function buttonGenerator() {
  const buttonContainer = document.getElementById("button-container");
  const viewContainer = document.getElementById("view-container")
  const historyContainer = document.getElementById("history-container")
  const operatorList = ["+", "-", "x", "/", "=", "DEL"];

  let variable_register_a = [];
  let variable_register_b = [];
  let variable_register_c = null;
  let operator_register = null;
  let view_register = [];
  let view_history_register = [];
  let result = null;

  for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.setAttribute("id", `button-${i}`);
    button.addEventListener("click", () => {
      variable_register_a.push(button.textContent);
      view_register.push(button.textContent);
      viewContainer.textContent = view_register.join("")
    });
    buttonContainer.appendChild(button);
  }

  operatorList.map((symbol) => {
    const button = document.createElement("button");
    button.textContent = symbol;
    button.setAttribute("id", `button-${symbol}`);

    if (button.textContent === "DEL") {
      button.addEventListener("click", () => {
        variable_register_a.pop();
        view_register.pop();
        viewContainer.textContent = view_register.join("")
      });
    }

    if (button.textContent != "=" && button.textContent != "DEL") {
      button.addEventListener("click", () => {
        if (variable_register_a.length > 0) {
          variable_register_b = variable_register_a;
          variable_register_a = [];
          operator_register = button.textContent;
          view_register.push(button.textContent);
          viewContainer.textContent = view_register.join("")
        }
      });
    } else if (button.textContent === "=") {
      button.addEventListener("click", () => {
        if (variable_register_c === null) {
          result = calculate(
            variable_register_a,
            variable_register_b,
            operator_register
          );
        } else {
          result = calculate(
            variable_register_a,
            variable_register_c,
            operator_register
          );
        }
        variable_register_c = integerToArray(result);
        view_history_register = view_register;
        historyContainer.textContent = view_history_register.join("")
        
        view_register = variable_register_c;
        viewContainer.textContent = view_register.join("")
        // console.log(result);
        // console.log(view_register);
        // console.log(view_history_register)
      });
    }

    buttonContainer.appendChild(button);
  });
}

buttonGenerator();

// Pseudo Code
