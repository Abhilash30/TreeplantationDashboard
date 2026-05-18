const counterElement = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");

// Function to format number to 5 digits
function formatCounter(number) {
    return String(number).padStart(5, "0");
}

// Load current count from server
async function loadCounter() {
    const response = await fetch("/count");

    const data = await response.json();

    counterElement.textContent = formatCounter(data.count);
}

// Increment counter
async function incrementCounter() {
    const response = await fetch("/increment", {
        method: "POST"
    });

    const data = await response.json();

    counterElement.textContent = formatCounter(data.count);
}

// Button click event
plusBtn.addEventListener("click", incrementCounter);

// Load initial value
loadCounter();