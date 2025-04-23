let expenses = [];
const form = document.getElementById('expense-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    const expense = { id: Date.now(), description, amount, category };
    expenses.push(expense);
    updateExpenseUI();
    form.reset();
  });
}

function updateExpenseUI() {
  const list = document.getElementById('expense-list');
  const total = document.getElementById('total');
  if (!list || !total) return;

  list.innerHTML = '';
  let totalAmt = 0;
  expenses.forEach(exp => {
    const li = document.createElement('li');
    li.innerText = `${exp.description}: ₹${exp.amount} (${exp.category})`;
    list.appendChild(li);
    totalAmt += exp.amount;
  });
  total.textContent = `Total: ₹${totalAmt}`;
}

function addCategory() {
  const input = document.getElementById('new-category');
  const list = document.getElementById('category-list');
  if (!input || !list) return;

  const li = document.createElement('li');
  li.innerText = input.value;
  list.appendChild(li);
  input.value = '';
}
