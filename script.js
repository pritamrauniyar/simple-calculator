let showResult = document.getElementById("res-text");
buttons = document.querySelectorAll("button");
let res = "";
let temp = "";

function animateButton(button) {
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 150);
}

function isOperator(char) {
  return ['+', '-', '*', '/', '%'].includes(char);
}

for (item of buttons) {
  item.addEventListener("click", (event) => {
    const button = event.target;
    animateButton(button);
    let buttonText = button.innerText;
    if (buttonText == "x") {
      buttonText = "*";
    }
    if (buttonText == "C") {
      res = "";
      temp = "";
      showResult.value = temp;
    } else if (buttonText == "=") {
      try {
        res = eval(res);
        temp = res;
        showResult.value = res;
      } catch (e) {
        showResult.value = "Error";
        res = "";
        temp = "";
      }
    } else {
      // Prevent multiple consecutive operators
      if (isOperator(buttonText) && res.length > 0 && isOperator(res.slice(-1))) {
        // Replace last operator with new one
        res = res.slice(0, -1) + buttonText;
        temp = temp.slice(0, -1) + buttonText;
      } else {
        res += buttonText;
        temp += buttonText;
      }
      showResult.value = temp;
    }
  });
}
