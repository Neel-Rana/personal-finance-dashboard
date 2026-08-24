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

// TRANSACTION FORM

const transactionForm = document.getElementById("transactionForm");
const titleInput = document.getElementById("title");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");

dateInput.value = new Date().toISOString().split("T")[0];

// HISTORY ELEMENTS

const transactionList = document.getElementById("transactionList");
const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");