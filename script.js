//your JS code here. If required.
// Delay function using a Promise and setTimeout
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle delay and display
async function handleDisplay() {
  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value);
  const outputDiv = document.getElementById("output");

  // Optional: Input validation
  if (!textInput || isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = "Please enter valid text and delay.";
    return;
  }

  outputDiv.textContent = "Waiting...";

  await wait(delayInput);

  outputDiv.textContent = textInput;
}

// Attach event listener to the button
document.getElementById("btn").addEventListener("click", handleDisplay);

