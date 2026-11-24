# 💰 Student Expense Tracker

A modern, responsive, and lightweight expense tracking web application designed specifically for students to manage daily budgets and track spending across categories. Built entirely with vanilla HTML5, CSS3, and modern JavaScript with persistent local browser storage.

---

## 🌐 Live Web Demo

Once GitHub Pages is activated, this application is accessible worldwide on any device (phone, tablet, laptop, desktop):

**[https://harshraj-hue.github.io/student-expense-tracker/](https://harshraj-hue.github.io/student-expense-tracker/)**

---

## ✨ Features

- **💸 Add & Track Expenses:** Log expenses with a name, amount (in Indian Rupees ₹), and category (*Food, Travel, Shopping, Education, Other*).
- **📊 Dynamic Category Filtering:** Filter expenses by category or view all at once, with a dynamic total sum that updates instantly to match the selected view.
- **💾 Persistent Storage:** Expenses are automatically saved to browser `localStorage` and persist across page refreshes and browser restarts.
- **⚡ Instant Form Validation:** Clean inline error feedback preventing blank submissions or negative numbers.
- **📱 100% Responsive Design:** Optimized for mobile phones (360px+), tablets (768px+), laptops, and high-res desktop monitors.
- **♿ Accessibility Built-in:** Includes touch-friendly tap targets (minimum 44px), high-contrast keyboard focus indicators, and screen-reader `aria-*` tags.

---

## 🚀 Quick Start / Local Setup

Follow these steps to run the application on your computer:

### 1. Clone the Repository
```bash
git clone https://github.com/harshraj-hue/student-expense-tracker.git
cd student-expense-tracker
```

### 2. Run Locally Using Any Method Below

#### Option A: Using Python 3 (Default on macOS & Linux)
```bash
python3 -m http.server 8085
```
Then open your browser and navigate to:
```
http://localhost:8085
```

#### Option B: Using Node.js / npx
```bash
# Using 'serve'
npx serve .

# OR using 'http-server'
npx http-server -p 8085
```

#### Option C: Directly Open HTML (No server required)
On macOS:
```bash
open index.html
```
On Linux:
```bash
xdg-open index.html
```
On Windows:
```bash
start index.html
```

---

## 📱 Testing on Mobile / Tablet via Local Wi-Fi

You can test and use this app on your phone or tablet on the same Wi-Fi network without deploying to the internet:

1. **Find your computer's local IP address:**
   ```bash
   # On macOS / Linux:
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
   *(For example: `192.168.1.153`)*

2. **Start the local server:**
   ```bash
   python3 -m http.server 8085
   ```

3. **Open on your phone or tablet:**
   Open any mobile browser (Safari, Chrome) and type:
   ```
   http://<YOUR_COMPUTER_IP>:8085
   # Example: http://192.168.1.153:8085
   ```

---

## 🌍 GitHub Pages Deployment Guide

To deploy or re-deploy this app on GitHub Pages so anyone in the world can open it:

1. Push your latest code to the `main` branch:
   ```bash
   git add .
   git commit -m "Update project files"
   git push -u origin main
   ```
2. Navigate to your repository on GitHub:
   `https://github.com/harshraj-hue/student-expense-tracker`
3. Click on **Settings** (top navigation bar).
4. In the left sidebar, click on **Pages** (under *Code and automation*).
5. Under **Build and deployment > Branch**:
   - Source: **Deploy from a branch**
   - Branch: select `main`
   - Folder: select `/ (root)`
   - Click **Save**.
6. Wait 30–60 seconds. Your live link will be ready at:
   ```
   https://harshraj-hue.github.io/student-expense-tracker/
   ```

---

## 📁 Project Structure

```
student-expense-tracker/
├── index.html       # Semantic HTML5 layout with form, filter, and accessibility attributes
├── style.css        # Responsive CSS styling with custom CSS variables and media queries
├── script.js        # Core logic: state management, validation, dynamic totals, and localStorage
└── README.md        # Comprehensive setup and deployment documentation
```

---

## 🛠️ Built With

- **HTML5:** Semantic elements, accessible form controls, and ARIA live regions.
- **CSS3:** Flexbox & CSS Grid, custom properties (CSS variables), media queries.
- **JavaScript (ES6+):** Pure vanilla JavaScript, Web Storage API (`localStorage`), modern DOM manipulation.

---

## 📄 License

This project is open-source and free to use for educational and personal purposes under the MIT License.
