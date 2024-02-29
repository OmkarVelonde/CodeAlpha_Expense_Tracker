// JavaScript Logic
let expenses = [];

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;
  if (name && amount) {
    expenses.push({ name, amount });
    displayExpenses();
    saveExpenses();
  }
}

function displayExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";
  expenses.forEach((expense, index) => {
    const expenseItem = document.createElement("div");
    expenseItem.innerHTML = `${expense.name}: $${expense.amount}
    <button onclick="editExpense(${index})">Edit</button>
    <button onclick="deleteExpense(${index})">Delete</button>`;
    expenseList.appendChild(expenseItem);
  });
}

function editExpense(index) {
  const newName = prompt("Enter new name:");
  const newAmount = prompt("Enter new amount:");
  if (newName && newAmount) {
    expenses[index].name = newName;
    expenses[index].amount = newAmount;
    displayExpenses();
    saveExpenses();
  }
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
  saveExpenses();
}

function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
  expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  displayExpenses();
}

loadExpenses();
