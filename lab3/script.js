const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// ✅ Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || key === ".") {
    // Numbers and decimal
    appendValue(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    // Operators
    appendValue(key);
  } else if (key === "Enter") {
    // Enter = calculate
    calculate();
  } else if (key === "Backspace") {
    // Backspace = delete last
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    // Press 'c' to clear
    clearDisplay();
  }
});
