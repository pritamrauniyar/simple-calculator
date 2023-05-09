let showResult = document.getElementById("res-text");
buttons = document.querySelectorAll("button");
let res = "";
let temp = "";
for (item of buttons) {
  item.addEventListener("click", (event) => {
    button = event.target.innerText;
    if (button == "x") {
      button = "*";
      temp = res;
      temp += "x";
      res += button;
      showResult.value = temp;
    } else if (button == "C") {
      res = "";
      temp = "";
      showResult.value = temp;
    } else if (button == "=") {
      res = eval(res);
      temp = res;
      showResult.value = res;
    } else {
      res += button;
      temp += button;
      showResult.value = temp;
    }
  });
}
