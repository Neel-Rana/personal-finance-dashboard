// NAVIGATION ELEMENTS

const themeToggle = document.getElementById("themeToggle");
const currentDateElement = document.getElementById("currentDate");


// TRANSACTION FORM

const transactionForm = document.getElementById("transactionForm");
const titleInput = document.getElementById("title");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");


// HISTORY ELEMENTS

const transactionList = document.getElementById("transactionList");
const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");


// SUMMARY ELEMENTS

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expense");


// TRANSACTION DATA

let transactions = [];


// CURRENT DATE

const today = new Date();

currentDateElement.textContent = today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
});


// DEFAULT TRANSACTION DATE

dateInput.value = new Date().toISOString().split("T")[0];


// TRANSACTION EXAMPLE

const transactionExample = {
    id: Date.now(),
    title: "Salary",
    type: "income",
    category: "Salary",
    amount: 50000,
    date: dateInput.value
};

console.log(transactionExample);