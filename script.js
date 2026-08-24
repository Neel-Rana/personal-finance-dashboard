// NAVIGATION ELEMENTS

const themeToggle = document.getElementById("themeToggle");
const currentDateElement = document.getElementById("currentDate");

// DISPLAY CURRENT DATE

const today = new Date();

currentDateElement.textContent = today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
});

console.log("FinanceFlow application initialized");