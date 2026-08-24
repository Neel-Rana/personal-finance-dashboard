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


let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

// SAVE TRANSACTIONS

function saveTransactions() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

// CURRENT DATE

const today = new Date();

currentDateElement.textContent = today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
});


// DEFAULT TRANSACTION DATE

dateInput.value = new Date().toISOString().split("T")[0];




// ADD TRANSACTION

transactionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const transaction = {
        id: Date.now(),
        title: titleInput.value.trim(),
        type: typeInput.value,
        category: categoryInput.value,
        amount: Number(amountInput.value),
        date: dateInput.value
    };

    transactions.push(transaction);
    saveTransactions();
    renderTransactions();
    updateSummary();

    transactionForm.reset();

    dateInput.value = new Date().toISOString().split("T")[0];
});

// DISPLAY TRANSACTIONS

function renderTransactions() {
    const searchText = searchInput.value.toLowerCase();
    const selectedType = filterType.value;

    const filteredTransactions = transactions.filter(function(transaction) {
        const matchesSearch = transaction.title
            .toLowerCase()
            .includes(searchText);

        const matchesType =
            selectedType === "all" ||
            transaction.type === selectedType;

        return matchesSearch && matchesType;
    });

    transactionList.innerHTML = "";

    if (filteredTransactions.length === 0) {
        transactionList.innerHTML = `
            <div class="empty-state">
                <h3>No transactions yet</h3>
                <p>Your transactions will appear here.</p>
            </div>
        `;
        return;
    }

    filteredTransactions.slice().reverse().forEach(function (transaction) {
        const item = document.createElement("div");

        item.className = `transaction-item ${transaction.type}`;

        const sign = transaction.type === "income" ? "+" : "-";

        item.innerHTML = `
            <div>
                <h3>${transaction.title}</h3>
                <p>${transaction.category} • ${transaction.date}</p>
            </div>

            <div class="transaction-right">
                <strong>${sign} ₹${transaction.amount}</strong>
                <button class="delete-btn" data-id="${transaction.id}">
                    Delete
                </button>
            </div>
        `;

        transactionList.appendChild(item);
    });
}

// UPDATE SUMMARY

function updateSummary() {
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(function (transaction) {
        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }
    });

    const balance = totalIncome - totalExpense;

    balanceElement.textContent = `₹${balance}`;
    incomeElement.textContent = `₹${totalIncome}`;
    expenseElement.textContent = `₹${totalExpense}`;
}
// SEARCH TRANSACTIONS

searchInput.addEventListener("input", function() {
    renderTransactions();
});
// FILTER TRANSACTIONS

filterType.addEventListener("change", function() {
    renderTransactions();
});

// DELETE TRANSACTION

transactionList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {

        const id = Number(event.target.dataset.id);

        transactions = transactions.filter(function(transaction) {
            return transaction.id !== id;
        });
        saveTransactions();
        renderTransactions();
        updateSummary();
    }
});

renderTransactions();
updateSummary();