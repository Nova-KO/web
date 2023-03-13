// Get all the buttons and result input element
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result input[type='text']");

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the button value and current result value
    const buttonText = button.textContent;
    const resultValue = result.value;

    // Handle AC button
    if (buttonText === "AC") {
      result.value = "";
    }
    // Handle equals button
    else if (buttonText === "=") {
      // Evaluate the expression and update the result
      try {
        result.value = eval(resultValue);
      } catch (error) {
        result.value = "Error";
      }
    }
    // Handle other buttons
    else {
      result.value = resultValue + buttonText;
    }
  });
});
