# Personal Finance Dashboard

A responsive web application for managing personal income and expenses.

## Features

- Add income transactions
- Add expense transactions
- View total balance
- Track total income
- Track total expenses
- Search transactions
- Filter income and expenses
- Delete transactions
- Save transactions using Local Storage
- Dark mode
- Responsive design

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Local Storage

## JavaScript Concepts Used

- DOM Manipulation
- Event Listeners
- Arrays
- Objects
- Array Methods
- `filter()`
- `forEach()`
- Local Storage
- JSON
- Dynamic Rendering
- Search Functionality
- Filtering

## How It Works

Each transaction is stored as a JavaScript object.

Example:

```javascript
{
    id: 123456,
    title: "Salary",
    type: "income",
    category: "Salary",
    amount: 50000,
    date: "2026-08-24"
}