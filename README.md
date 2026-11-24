# Student Expense Tracker

A lightweight, fully responsive, and accessible expense tracking web application for students. Built with pure vanilla HTML5, CSS3, and modern JavaScript with persistent local storage.

## Features

- **Add & Track Expenses:** Log expenses with a name, amount (in ₹), and category (*Food, Travel, Shopping, Education, Other*).
- **Instant Validation:** Clean error feedback preventing empty or negative values.
- **Dynamic Category Filtering:** Filter expenses by category or view all at once, with dynamic total calculation matching the active view.
- **Persistent Storage:** Expenses are automatically saved to `localStorage` and persist across page refreshes.
- **Accessible & Responsive:**
  - Touch-friendly tap targets (minimum 44px height).
  - High-contrast visual keyboard focus states and screen-reader `aria-*` tags.
  - Fully responsive across Mobile (360px), Tablet (768px), Laptop (1024px), and Desktop (1440px+).

## Running the Project

Open `index.html` directly in any web browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.
