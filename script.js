
let count = 0;

const countDisplay = document.getElementById("count");

function updateDisplay() {
  countDisplay.textContent = count;
}

document.getElementById("increase").addEventListener("click", () => {
  count++;
  updateDisplay();
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  updateDisplay();
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "+" || event.key === "ArrowUp") {
    count++;
    updateDisplay();
  } else if (event.key === "-" || event.key === "ArrowDown") {
    count--;
    updateDisplay();
  } else if (event.key.toLowerCase() === "r") {
    count = 0;
    updateDisplay();
  }
});
