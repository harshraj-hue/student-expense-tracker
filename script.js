// Student Expense Tracker
const STORAGE_KEY = "student_expenses_v1";

let expenses = [];
let nextId = 1;

// DOM Elements
const form = document.getElementById("expenseForm");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const filterSelect = document.getElementById("filter");
const listEl = document.getElementById("expenseList");
const emptyEl = document.getElementById("empty");
const errorEl = document.getElementById("error");
const totalAmountEl = document.getElementById("totalAmount");
const totalLabelEl = document.getElementById("totalLabel");

// Currency Formatter
function formatMoney(n) {
  return "₹" + Number(n).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// LocalStorage helpers with try/catch
function loadExpenses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        expenses = parsed;
        nextId = expenses.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0) + 1;
      }
    }
  } catch (err) {
    console.error("Failed to load expenses from localStorage:", err);
    expenses = [];
    nextId = 1;
  }
}

function saveExpenses() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  } catch (err) {
    console.error("Failed to save expenses to localStorage:", err);
  }
}

// Error Handling & Validation Feedback
function showError(msg, ...badInputs) {
  errorEl.textContent = msg;
  [nameInput, amountInput].forEach(input => input.classList.remove("invalid"));
  badInputs.forEach(input => {
    if (input) input.classList.add("invalid");
  });
}

// Clear error status dynamically on user typing
function clearErrorOnInput() {
  if (errorEl.textContent) {
    showError("");
  }
}

nameInput.addEventListener("input", clearErrorOnInput);
amountInput.addEventListener("input", clearErrorOnInput);

// Add Expense Handler
function addExpense(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const rawAmount = amountInput.value.trim();
  const amount = Number(rawAmount);

  // Validation
  if (!name && !rawAmount) {
    return showError("Please enter both an expense name and an amount.", nameInput, amountInput);
  }
  if (!name) {
    return showError("Please enter an expense name.", nameInput);
  }
  if (!rawAmount) {
    return showError("Please enter an amount.", amountInput);
  }
  if (isNaN(amount) || !isFinite(amount) || amount <= 0) {
    return showError("Amount must be a valid number greater than 0.", amountInput);
  }

  // Create new expense item
  const newExpense = {
    id: nextId++,
    name,
    amount: Math.round((amount + Number.EPSILON) * 100) / 100,
    category: categoryInput.value || "Other"
  };

  expenses.push(newExpense);
  saveExpenses();

  showError("");
  form.reset();
  nameInput.focus();
  render();
}

// Delete Expense Handler
function deleteExpense(id) {
  expenses = expenses.filter(x => x.id !== id);
  saveExpenses();
  render();
}

// Render Function
function render() {
  const filter = filterSelect.value;
  const visible = filter === "All" ? expenses : expenses.filter(x => x.category === filter);

  listEl.innerHTML = "";

  visible.forEach(exp => {
    const li = document.createElement("li");
    li.className = "item";

    const nameSpan = document.createElement("span");
    nameSpan.className = "item-name";
    nameSpan.textContent = exp.name;

    const badge = document.createElement("span");
    badge.className = "badge " + exp.category;
    badge.textContent = exp.category;

    const amountSpan = document.createElement("span");
    amountSpan.className = "item-amount";
    amountSpan.textContent = formatMoney(exp.amount);

    const del = document.createElement("button");
    del.className = "delete";
    del.type = "button";
    del.textContent = "Delete";
    del.setAttribute("aria-label", `Delete expense: ${exp.name} (${formatMoney(exp.amount)})`);
    del.addEventListener("click", () => deleteExpense(exp.id));

    li.append(nameSpan, badge, amountSpan, del);
    listEl.appendChild(li);
  });

  // Calculate and display total
  const total = visible.reduce((sum, x) => sum + x.amount, 0);
  totalAmountEl.textContent = formatMoney(total);
  totalLabelEl.textContent = filter === "All" ? "Total spent" : `Total spent on ${filter}`;

  // Empty state handling
  if (visible.length === 0) {
    emptyEl.style.display = "block";
    if (expenses.length === 0) {
      emptyEl.textContent = "No expenses added yet. Enter a name, amount, and category above to get started!";
    } else {
      emptyEl.textContent = `No expenses found in "${filter}". Try selecting another category or add a new one above.`;
    }
  } else {
    emptyEl.style.display = "none";
  }
}

// Event Listeners
form.addEventListener("submit", addExpense);
filterSelect.addEventListener("change", render);

// Initialize application
loadExpenses();
render();
