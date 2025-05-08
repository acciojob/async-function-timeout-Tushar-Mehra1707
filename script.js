// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get elements from the DOM
    const btn = document.getElementById('btn');
    const textInput = document.getElementById('text');
    const delayInput = document.getElementById('delay');
    const outputDiv = document.getElementById('output');

    // Helper function to create a delay using a Promise
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Async function to handle the delay and message display
    async function displayMessage() {
        const message = textInput.value;
        const delay = parseInt(delayInput.value);

        // Clear previous output immediately
        outputDiv.textContent = '';

        // Validate delay (basic check)
        if (isNaN(delay) || delay < 0) {
            outputDiv.textContent = 'Please enter a valid positive number for delay.';
            return;
        }

        // Wait for the specified delay
        await wait(delay);

        // Display the message
        outputDiv.textContent = message;
    }

    // Add click event listener to the button
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        displayMessage();
    });
});
